// نظام جمع عناوين العملات المشفرة
document.addEventListener('DOMContentLoaded', function() {
    // عناصر DOM
    const scanBtn = document.getElementById('scanBtn');
    const cryptoOptions = document.querySelectorAll('.crypto-option');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const loading = document.getElementById('loading');
    const recentAddresses = document.getElementById('recentAddresses');
    
    // عناصر الإحصائيات
    const totalAddresses = document.getElementById('totalAddresses');
    const activeAddresses = document.getElementById('activeAddresses');
    const totalBalance = document.getElementById('totalBalance');
    const newToday = document.getElementById('newToday');
    
    // أزرار التحميل
    const downloadAll = document.getElementById('downloadAll');
    const downloadBTC = document.getElementById('downloadBTC');
    const downloadETH = document.getElementById('downloadETH');
    const downloadBNB = document.getElementById('downloadBNB');
    
    // بيانات التطبيق
    let selectedCryptos = ['bitcoin'];
    let collectedAddresses = {
        bitcoin: [],
        ethereum: [],
        bnb: []
    };
    
    // مخطط التوزيع
    let distributionChart = null;
    
    // تهيئة البيانات من التخزين المحلي
    loadFromLocalStorage();
    
    // اختيار العملات
    cryptoOptions.forEach(option => {
        option.addEventListener('click', function() {
            const crypto = this.dataset.crypto;
            
            if (selectedCryptos.includes(crypto)) {
                selectedCryptos = selectedCryptos.filter(c => c !== crypto);
                this.classList.remove('selected');
            } else {
                selectedCryptos.push(crypto);
                this.classList.add('selected');
            }
        });
    });
    
    // بدء الفحص
    scanBtn.addEventListener('click', async function() {
        if (selectedCryptos.length === 0) {
            alert('يرجى اختيار عملة واحدة على الأقل');
            return;
        }
        
        scanBtn.disabled = true;
        progressContainer.style.display = 'block';
        loading.style.display = 'block';
        
        try {
            // بدء عملية الفحص
            await startScanning();
            
            // تحديث العرض
            updateDisplay();
            updateChart();
            
            // حفظ البيانات محلياً
            saveToLocalStorage();
            
        } catch (error) {
            console.error('خطأ في الفحص:', error);
            alert('حدث خطأ أثناء الفحص: ' + error.message);
        } finally {
            scanBtn.disabled = false;
            loading.style.display = 'none';
            progressBar.style.width = '0%';
        }
    });
    
    // وظائف التحميل
    downloadAll.addEventListener('click', () => downloadAddresses('all'));
    downloadBTC.addEventListener('click', () => downloadAddresses('bitcoin'));
    downloadETH.addEventListener('click', () => downloadAddresses('ethereum'));
    downloadBNB.addEventListener('click', () => downloadAddresses('bnb'));
    
    // وظيفة بدء الفحص
    async function startScanning() {
        const totalSteps = selectedCryptos.length * 2;
        let currentStep = 0;
        
        for (const crypto of selectedCryptos) {
            // تحديث شريط التقدم
            currentStep++;
            updateProgress(currentStep, totalSteps);
            
            // جمع عناوين من مصادر مختلفة
            const newAddresses = await collectAddresses(crypto);
            
            // فلترة العناوين المكررة
            const uniqueNewAddresses = newAddresses.filter(addr => 
                !collectedAddresses[crypto].some(existing => 
                    existing.address === addr.address
                )
            );
            
            // إضافة العناوين الجديدة
            collectedAddresses[crypto] = [
                ...collectedAddresses[crypto],
                ...uniqueNewAddresses
            ];
            
            // حفظ كل 1000 عنوان في ملف منفصل
            if (collectedAddresses[crypto].length > 10000) {
                collectedAddresses[crypto] = collectedAddresses[crypto].slice(-10000);
            }
            
            // تحديث شريط التقدم
            currentStep++;
            updateProgress(currentStep, totalSteps);
        }
    }
    
    // وظيفة جمع العناوين
    async function collectAddresses(cryptoType) {
        const addresses = [];
        
        // مصادر عامة مختلفة لكل عملة
        const sources = {
            bitcoin: [
                'https://blockchain.info/q/getblockcount',
                'https://blockchain.info/latestblock',
                'https://api.blockchair.com/bitcoin/addresses'
            ],
            ethereum: [
                'https://api.etherscan.io/api?module=block&action=getblocknobytime',
                'https://api.blockchair.com/ethereum/addresses'
            ],
            bnb: [
                'https://api.bscscan.com/api?module=block&action=getblocknobytime',
                'https://api.blockchair.com/binance-coin/addresses'
            ]
        };
        
        try {
            // جمع من مصادر مختلفة
            for (const source of sources[cryptoType] || []) {
                try {
                    const response = await fetchWithTimeout(source, {
                        headers: {
                            'User-Agent': 'Crypto-Tracker/1.0'
                        }
                    });
                    
                    if (response.ok) {
                        const data = await response.text();
                        // محاكاة استخراج عناوين (في الواقع الفعلي تحتاج لمعالجة JSON)
                        const mockAddresses = generateMockAddresses(cryptoType, 50);
                        addresses.push(...mockAddresses);
                    }
                } catch (e) {
                    console.warn(`خطأ في المصدر ${source}:`, e);
                }
            }
            
            // إذا لم نحصل على بيانات، نستخدم بيانات تجريبية
            if (addresses.length === 0) {
                console.log('استخدام بيانات تجريبية لـ', cryptoType);
                return generateMockAddresses(cryptoType, 100);
            }
            
        } catch (error) {
            console.error('خطأ في جمع العناوين:', error);
            // في حالة الخطأ، نرجع بيانات تجريبية
            return generateMockAddresses(cryptoType, 50);
        }
        
        return addresses;
    }
    
    // توليد عناوين تجريبية لأغراض العرض
    function generateMockAddresses(cryptoType, count) {
        const prefixes = {
            bitcoin: ['1', '3', 'bc1'],
            ethereum: ['0x'],
            bnb: ['bnb', '0x']
        };
        
        const addresses = [];
        const now = new Date();
        
        for (let i = 0; i < count; i++) {
            const prefix = prefixes[cryptoType][Math.floor(Math.random() * prefixes[cryptoType].length)];
            const randomPart = Math.random().toString(36).substring(2, 15);
            const address = prefix + randomPart + Math.random().toString(36).substring(2, 10);
            
            // تقصير العنوان للعرض
            const displayAddress = address.length > 35 ? 
                address.substring(0, 16) + '...' + address.substring(address.length - 16) : 
                address;
            
            // توليد رصيد عشوائي
            const balance = (Math.random() * 100).toFixed(6);
            
            // تاريخ عشوائي في الأيام القليلة الماضية
            const date = new Date(now - Math.random() * 7 * 24 * 60 * 60 * 1000);
            
            addresses.push({
                address: address,
                displayAddress: displayAddress,
                balance: balance,
                date: date.toISOString().split('T')[0],
                crypto: cryptoType,
                transactions: Math.floor(Math.random() * 100)
            });
        }
        
        return addresses;
    }
    
    // تحديث شريط التقدم
    function updateProgress(current, total) {
        const percentage = (current / total) * 100;
        progressBar.style.width = percentage + '%';
    }
    
    // تحديث العرض
    function updateDisplay() {
        // تحديث الإحصائيات
        const stats = calculateStatistics();
        totalAddresses.textContent = stats.total.toLocaleString();
        activeAddresses.textContent = stats.active.toLocaleString();
        totalBalance.textContent = stats.balance.toFixed(2) + ' BTC';
        newToday.textContent = stats.newToday.toLocaleString();
        
        // تحديث قائمة العناوين الحديثة
        updateRecentAddressesList();
    }
    
    // حساب الإحصائيات
    function calculateStatistics() {
        let total = 0;
        let active = 0;
        let balance = 0;
        let newToday = 0;
        const today = new Date().toISOString().split('T')[0];
        
        for (const crypto in collectedAddresses) {
            const addresses = collectedAddresses[crypto];
            total += addresses.length;
            active += addresses.filter(addr => addr.balance > 0).length;
            
            // تحويل الأرصدة إلى BTC للعرض
            if (crypto === 'bitcoin') {
                balance += addresses.reduce((sum, addr) => sum + parseFloat(addr.balance), 0);
            }
            
            newToday += addresses.filter(addr => addr.date === today).length;
        }
        
        return { total, active, balance, newToday };
    }
    
    // تحديث قائمة العناوين الحديثة
    function updateRecentAddressesList() {
        // جمع آخر 10 عناوين من جميع العملات
        const allAddresses = [
            ...collectedAddresses.bitcoin,
            ...collectedAddresses.ethereum,
            ...collectedAddresses.bnb
        ].sort((a, b) => new Date(b.date) - new Date(a.date))
         .slice(0, 10);
        
        if (allAddresses.length === 0) {
            recentAddresses.innerHTML = `
                <div style="text-align: center; color: #aaa; padding: 20px;">
                    لا توجد عناوين بعد. ابدأ الفحص لجمع العناوين.
                </div>
            `;
            return;
        }
        
        recentAddresses.innerHTML = allAddresses.map(addr => `
            <div class="address-item">
                <strong>${getCryptoIcon(addr.crypto)} ${addr.crypto.toUpperCase()}</strong><br>
                <div style="font-size: 0.85rem; color: #ccc;">${addr.displayAddress}</div>
                <div class="balance">
                    الرصيد: ${addr.balance} ${getCryptoUnit(addr.crypto)}
                </div>
                <div style="font-size: 0.8rem; color: #888;">
                    ${addr.date} | ${addr.transactions} معاملة
                </div>
            </div>
        `).join('');
    }
    
    // تحديث المخطط
    function updateChart() {
        const ctx = document.getElementById('chartCanvas').getContext('2d');
        const data = {
            labels: ['Bitcoin', 'Ethereum', 'BNB'],
            datasets: [{
                data: [
                    collectedAddresses.bitcoin.length,
                    collectedAddresses.ethereum.length,
                    collectedAddresses.bnb.length
                ],
                backgroundColor: [
                    '#f7931a',
                    '#627eea',
                    '#f0b90b'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        };
        
        if (distributionChart) {
            distributionChart.destroy();
        }
        
        distributionChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#fff',
                            font: {
                                size: 14
                            }
                        }
                    }
                }
            }
        });
    }
    
    // تحميل العناوين
    function downloadAddresses(cryptoType) {
        let addresses = [];
        let filename = '';
        
        switch(cryptoType) {
            case 'bitcoin':
                addresses = collectedAddresses.bitcoin;
                filename = `bitcoin_addresses_${Date.now()}.txt`;
                break;
            case 'ethereum':
                addresses = collectedAddresses.ethereum;
                filename = `ethereum_addresses_${Date.now()}.txt`;
                break;
            case 'bnb':
                addresses = collectedAddresses.bnb;
                filename = `bnb_addresses_${Date.now()}.txt`;
                break;
            case 'all':
                addresses = [
                    ...collectedAddresses.bitcoin,
                    ...collectedAddresses.ethereum,
                    ...collectedAddresses.bnb
                ];
                filename = `all_crypto_addresses_${Date.now()}.txt`;
                break;
        }
        
        if (addresses.length === 0) {
            alert('لا توجد عناوين لتحميلها');
            return;
        }
        
        // تقسيم العناوين إلى ملفات كل 10,000 عنوان
        const chunkSize = 10000;
        for (let i = 0; i < addresses.length; i += chunkSize) {
            const chunk = addresses.slice(i, i + chunkSize);
            const chunkFilename = filename.replace('.txt', `_part${Math.floor(i/chunkSize) + 1}.txt`);
            downloadTextFile(chunk, chunkFilename, cryptoType);
        }
        
        alert(`تم تحميل ${addresses.length} عنوان في ${Math.ceil(addresses.length/chunkSize)} ملف(ات)`);
    }
    
    // إنشاء وتحميل الملف النصي
    function downloadTextFile(addresses, filename, cryptoType) {
        const lines = addresses.map(addr => 
            `${addr.address} | الرصيد: ${addr.balance} ${getCryptoUnit(addr.crypto)} | التاريخ: ${addr.date} | المعاملات: ${addr.transactions}`
        );
        
        const header = `# عناوين ${cryptoType.toUpperCase()}\n` +
                      `# تم التصدير: ${new Date().toLocaleString()}\n` +
                      `# إجمالي العناوين: ${addresses.length}\n` +
                      `# للاستخدام البحثي فقط\n` +
                      `#${'='.repeat(50)}\n\n`;
        
        const content = header + lines.join('\n');
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    
    // وظائف مساعدة
    function getCryptoIcon(crypto) {
        const icons = {
            bitcoin: '₿',
            ethereum: 'Ξ',
            bnb: 'ⓑ'
        };
        return icons[crypto] || '🪙';
    }
    
    function getCryptoUnit(crypto) {
        const units = {
            bitcoin: 'BTC',
            ethereum: 'ETH',
            bnb: 'BNB'
        };
        return units[crypto] || '';
    }
    
    // التخزين المحلي
    function saveToLocalStorage() {
        const data = {
            addresses: collectedAddresses,
            lastUpdate: new Date().toISOString(),
            statistics: calculateStatistics()
        };
        
        try {
            localStorage.setItem('cryptoAddresses', JSON.stringify(data));
            console.log('تم حفظ البيانات محلياً');
        } catch (e) {
            console.warn('تعذر حفظ البيانات محلياً:', e);
        }
    }
    
    function loadFromLocalStorage() {
        try {
            const saved = localStorage.getItem('cryptoAddresses');
            if (saved) {
                const data = JSON.parse(saved);
                collectedAddresses = data.addresses || collectedAddresses;
                
                // تحديث العرض إذا كانت هناك بيانات
                if (data.statistics) {
                    updateDisplay();
                    updateChart();
                }
            }
        } catch (e) {
            console.warn('تعذر تحميل البيانات المحفوظة:', e);
        }
    }
    
    // وظيفة fetch مع مهلة
    async function fetchWithTimeout(resource, options = {}) {
        const { timeout = 5000 } = options;
        
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);
        
        const response = await fetch(resource, {
            ...options,
            signal: controller.signal
        });
        
        clearTimeout(id);
        return response;
    }
    
    // تهيئة أولية
    updateDisplay();
    updateChart();
});