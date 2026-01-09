<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام تحديث الملفات التلقائي - GitHub</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #0d1117, #161b22);
            color: #c9d1d9;
            min-height: 100vh;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .container {
            max-width: 1200px;
            width: 100%;
            background-color: #0d1117;
            border-radius: 20px;
            border: 1px solid #30363d;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            overflow: hidden;
            margin: 20px;
        }

        .header {
            background: linear-gradient(90deg, #238636, #2ea043);
            color: white;
            padding: 25px 30px;
            text-align: center;
            border-bottom: 1px solid #30363d;
        }

        .header h1 {
            font-size: 2.2rem;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
        }

        .header h1 i {
            font-size: 2.5rem;
        }

        .header p {
            opacity: 0.9;
            font-size: 1.1rem;
        }

        .content {
            padding: 30px;
        }

        .info-box {
            background-color: #161b22;
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 30px;
            border: 1px solid #30363d;
            display: flex;
            align-items: center;
            gap: 25px;
        }

        .info-icon {
            background: linear-gradient(135deg, #1f6feb, #2ea043);
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            flex-shrink: 0;
        }

        .info-content {
            flex: 1;
        }

        .info-content h2 {
            color: #58a6ff;
            margin-bottom: 15px;
            font-size: 1.8rem;
        }

        .info-content p {
            color: #8b949e;
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 10px;
        }

        .info-content code {
            background-color: #0d1117;
            padding: 3px 8px;
            border-radius: 4px;
            font-family: monospace;
            border: 1px solid #30363d;
            color: #a5d6ff;
        }

        .stats-box {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            gap: 20px;
        }

        .stat-item {
            background-color: #161b22;
            border-radius: 12px;
            padding: 25px;
            text-align: center;
            flex: 1;
            border: 1px solid #30363d;
            transition: transform 0.3s ease;
        }

        .stat-item:hover {
            transform: translateY(-5px);
            border-color: #58a6ff;
        }

        .stat-value {
            font-size: 2.5rem;
            font-weight: bold;
            color: #58a6ff;
            margin-bottom: 10px;
        }

        .stat-label {
            color: #8b949e;
            font-size: 1.1rem;
        }

        .file-details {
            background-color: #161b22;
            border-radius: 12px;
            margin-bottom: 30px;
            border: 1px solid #30363d;
            overflow: hidden;
        }

        .file-header {
            background-color: #0d1117;
            padding: 20px 30px;
            border-bottom: 1px solid #30363d;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .file-header h3 {
            color: #58a6ff;
            font-size: 1.6rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .file-header h3 i {
            color: #3776ab;
        }

        .file-source {
            color: #8b949e;
        }

        .file-source a {
            color: #58a6ff;
            text-decoration: none;
        }

        .file-source a:hover {
            text-decoration: underline;
        }

        .file-content {
            padding: 30px;
        }

        .file-meta {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .meta-item {
            background-color: #0d1117;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #30363d;
        }

        .meta-label {
            display: block;
            color: #8b949e;
            font-size: 0.9rem;
            margin-bottom: 5px;
        }

        .meta-value {
            color: #c9d1d9;
            font-weight: 500;
            word-break: break-all;
        }

        .action-section {
            margin-bottom: 30px;
        }

        .update-btn {
            background: linear-gradient(90deg, #1f6feb, #2ea043);
            color: white;
            border: none;
            padding: 20px 40px;
            font-size: 1.4rem;
            border-radius: 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(31, 111, 235, 0.3);
            width: 100%;
            margin-bottom: 20px;
        }

        .update-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(31, 111, 235, 0.4);
            background: linear-gradient(90deg, #2ea043, #1f6feb);
        }

        .update-btn:active {
            transform: translateY(0);
        }

        .update-btn i {
            font-size: 1.6rem;
        }

        .progress-container {
            background-color: #0d1117;
            height: 30px;
            border-radius: 15px;
            overflow: hidden;
            border: 1px solid #30363d;
            margin-bottom: 20px;
            display: none;
            position: relative;
        }

        .progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #1f6feb, #2ea043);
            width: 0%;
            transition: width 0.3s ease;
        }

        .progress-text {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }

        .status-message {
            padding: 15px 25px;
            border-radius: 10px;
            text-align: center;
            animation: fadeIn 0.5s ease;
            display: none;
        }

        .status-message.success {
            background-color: rgba(35, 134, 54, 0.2);
            border: 1px solid #238636;
            color: #56d364;
            display: block;
        }

        .status-message.error {
            background-color: rgba(248, 81, 73, 0.2);
            border: 1px solid #f85149;
            color: #f85149;
            display: block;
        }

        .status-message.info {
            background-color: rgba(56, 139, 253, 0.2);
            border: 1px solid #388bfd;
            color: #58a6ff;
            display: block;
        }

        .file-preview {
            background-color: #0d1117;
            border-radius: 12px;
            padding: 25px;
            border: 1px solid #30363d;
        }

        .file-preview h4 {
            color: #58a6ff;
            margin-bottom: 15px;
            font-size: 1.4rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .file-preview pre {
            background-color: #161b22;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #30363d;
            max-height: 300px;
            overflow-y: auto;
            color: #a5d6ff;
            font-family: 'Courier New', Courier, monospace;
            font-size: 0.9rem;
            line-height: 1.5;
            white-space: pre-wrap;
        }

        .comment {
            color: #6e7681;
        }

        .string {
            color: #a5d6ff;
        }

        .keyword {
            color: #ff7b72;
            font-weight: bold;
        }

        .constant {
            color: #79c0ff;
        }

        .number {
            color: #79c0ff;
        }

        .instructions {
            background-color: #161b22;
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 30px;
            border: 1px solid #30363d;
        }

        .instructions h3 {
            color: #58a6ff;
            margin-bottom: 20px;
            font-size: 1.6rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .instruction-content {
            color: #8b949e;
            line-height: 1.6;
        }

        .instruction-content p {
            margin-bottom: 15px;
        }

        .instruction-content ul {
            padding-right: 20px;
            margin-bottom: 20px;
        }

        .instruction-content li {
            margin-bottom: 10px;
        }

        .instruction-content a {
            color: #58a6ff;
            text-decoration: none;
        }

        .instruction-content a:hover {
            text-decoration: underline;
        }

        .instruction-content strong {
            color: #c9d1d9;
        }

        .note-box {
            background-color: rgba(31, 111, 235, 0.1);
            border: 1px solid #1f6feb;
            border-radius: 12px;
            padding: 20px;
            display: flex;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 30px;
        }

        .note-box i {
            color: #58a6ff;
            font-size: 1.8rem;
            margin-top: 5px;
        }

        .note-content h4 {
            color: #58a6ff;
            margin-bottom: 10px;
            font-size: 1.3rem;
        }

        .note-content p {
            color: #8b949e;
            line-height: 1.6;
        }

        .footer {
            background-color: #0d1117;
            padding: 25px 30px;
            border-top: 1px solid #30363d;
            text-align: center;
        }

        .footer p {
            color: #8b949e;
            margin-bottom: 20px;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }

        .footer-links a {
            color: #58a6ff;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            border-radius: 8px;
            border: 1px solid #30363d;
            transition: all 0.3s;
        }

        .footer-links a:hover {
            background-color: #161b22;
            border-color: #58a6ff;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @media (max-width: 768px) {
            .container {
                margin: 10px;
            }
            
            .header h1 {
                font-size: 1.8rem;
            }
            
            .content {
                padding: 20px;
            }
            
            .info-box {
                flex-direction: column;
                text-align: center;
                gap: 20px;
            }
            
            .stats-box {
                flex-direction: column;
            }
            
            .file-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }
            
            .update-btn {
                padding: 16px 25px;
                font-size: 1.2rem;
            }
            
            .footer-links {
                flex-direction: column;
                gap: 15px;
            }
        }

        @media (max-width: 480px) {
            .header {
                padding: 20px;
            }
            
            .header h1 {
                font-size: 1.5rem;
            }
            
            .info-icon {
                width: 60px;
                height: 60px;
                font-size: 2rem;
            }
            
            .stat-value {
                font-size: 2rem;
            }
            
            .update-btn {
                padding: 14px 20px;
                font-size: 1.1rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1><i class="fab fa-github"></i> نظام تحديث الملفات التلقائي</h1>
            <p>تحديث الملفات من GitHub مباشرةً</p>
        </div>
        
        <div class="content">
            <div class="info-box">
                <div class="info-icon">
                    <i class="fas fa-sync-alt"></i>
                </div>
                <div class="info-content">
                    <h2>كيف يعمل النظام؟</h2>
                    <p>يقوم هذا النظام بتنزيل وتحديث ملف <code>Bot.py</code> تلقائياً من مستودع GitHub المحدد عند كل نقرة على الزر.</p>
                    <p>الملف المحمّل سيتم حفظه بجانب هذا الموقع على GitHub Pages.</p>
                </div>
            </div>
            
            <div class="stats-box">
                <div class="stat-item">
                    <div class="stat-value" id="downloadCount">0</div>
                    <div class="stat-label">مرات التحميل</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value" id="lastUpdate">لم يتم بعد</div>
                    <div class="stat-label">آخر تحديث</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value" id="fileStatus">غير محمل</div>
                    <div class="stat-label">حالة الملف</div>
                </div>
            </div>
            
            <div class="file-details">
                <div class="file-header">
                    <h3><i class="fab fa-python"></i> ملف Bot.py</h3>
                    <span class="file-source">مصدر الملف: <a href="https://github.com/Abdslim777/Abdh/blob/main/Bot.py" target="_blank">مستودع Abdh</a></span>
                </div>
                
                <div class="file-content">
                    <div class="file-meta">
                        <div class="meta-item">
                            <span class="meta-label">الموقع المستهدف:</span>
                            <span class="meta-value">نفس دليل GitHub Pages</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">آخر تعديل:</span>
                            <span class="meta-value" id="fileLastModified">غير معروف</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">حجم الملف:</span>
                            <span class="meta-value" id="fileSize">غير معروف</span>
                        </div>
                    </div>
                    
                    <div class="action-section">
                        <button id="updateBtn" class="update-btn">
                            <i class="fas fa-download"></i> تحديث/تحميل الملف الآن
                        </button>
                        
                        <div class="progress-container" id="progressContainer">
                            <div class="progress-bar" id="progressBar"></div>
                            <span class="progress-text" id="progressText">0%</span>
                        </div>
                        
                        <div id="statusMessage" class="status-message"></div>
                    </div>
                    
                    <div class="file-preview">
                        <h4><i class="fas fa-code"></i> معاينة الملف (الأسطر الأولى)</h4>
                        <pre id="filePreview">سيظهر محتوى الملف هنا بعد التحميل...</pre>
                    </div>
                </div>
            </div>
            
            <div class="instructions">
                <h3><i class="fas fa-info-circle"></i> معلومات تقنية</h3>
                <div class="instruction-content">
                    <p>هذا الموقع مصمم للعمل على <strong>GitHub Pages</strong> ويقوم بالمهام التالية:</p>
                    <ul>
                        <li>تحميل ملف <code>Bot.py</code> من <a href="https://github.com/Abdslim777/Abdh/blob/main/Bot.py" target="_blank">هذا الرابط</a> عند كل نقرة</li>
                        <li>تحديث الملف محلياً على نفس مستودع GitHub Pages</li>
                        <li>عرض إحصائيات التحديث والتاريخ</li>
                        <li>توفير معاينة للمحتوى المحمّل</li>
                    </ul>
                    <p><strong>ملاحظة:</strong> للحصول على وظيفة التحديث الكاملة مع حفظ الملف على GitHub، يمكن إضافة سكريبت GitHub Actions.</p>
                </div>
            </div>
            
            <div class="note-box">
                <i class="fas fa-lightbulb"></i>
                <div class="note-content">
                    <h4>ميزات النظام</h4>
                    <p>1. يحتفظ بعدد مرات التحميل حتى بعد إغلاق المتصفح<br>
                       2. يعرض آخر وقت تحديث للملف<br>
                       3. يوفر معاينة للملف مع تمييز بناء الجملة<br>
                       4. يعرض تقدم التحميل بشكل مرئي<br>
                       5. متوافق مع جميع الأجهزة والشاشات</p>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>تم التطوير للعمل على GitHub Pages | يتم التحديث عند كل نقرة</p>
            <div class="footer-links">
                <a href="https://github.com/Abdslim777/Abdh" target="_blank"><i class="fab fa-github"></i> المستودع المصدر</a>
                <a href="#" id="viewFileLink" target="_blank"><i class="fas fa-file-code"></i> عرض الملف المحلي</a>
                <a href="#" id="downloadDirectLink"><i class="fas fa-download"></i> تحميل مباشر</a>
            </div>
        </div>
    </div>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // عناصر DOM
            const updateBtn = document.getElementById('updateBtn');
            const progressContainer = document.getElementById('progressContainer');
            const progressBar = document.getElementById('progressBar');
            const progressText = document.getElementById('progressText');
            const statusMessage = document.getElementById('statusMessage');
            const downloadCountElement = document.getElementById('downloadCount');
            const lastUpdateElement = document.getElementById('lastUpdate');
            const fileStatusElement = document.getElementById('fileStatus');
            const fileLastModifiedElement = document.getElementById('fileLastModified');
            const fileSizeElement = document.getElementById('fileSize');
            const filePreviewElement = document.getElementById('filePreview');
            const viewFileLink = document.getElementById('viewFileLink');
            const downloadDirectLink = document.getElementById('downloadDirectLink');
            
            // متغيرات التطبيق
            let downloadCount = localStorage.getItem('downloadCount') || 0;
            let lastUpdateTime = localStorage.getItem('lastUpdateTime') || null;
            
            // رابط الملف على GitHub
            const GITHUB_FILE_URL = 'https://raw.githubusercontent.com/Abdslim777/Abdh/main/Bot.py';
            const LOCAL_FILE_NAME = 'Bot.py';
            
            // تهيئة الصفحة
            function initPage() {
                // تحديث الإحصائيات
                downloadCountElement.textContent = downloadCount;
                
                if (lastUpdateTime) {
                    const date = new Date(lastUpdateTime);
                    lastUpdateElement.textContent = date.toLocaleString('ar-EG');
                }
                
                // محاولة تحميل بيانات الملف المحلي (إن وجد)
                checkLocalFile();
                
                // إعداد الروابط
                viewFileLink.href = LOCAL_FILE_NAME;
                downloadDirectLink.href = GITHUB_FILE_URL;
                downloadDirectLink.download = LOCAL_FILE_NAME;
                
                // إظهار رسالة ترحيبية
                showStatus('انقر على الزر لتحديث/تحميل ملف Bot.py من GitHub', 'info');
            }
            
            // التحقق من وجود ملف محلي
            async function checkLocalFile() {
                try {
                    const response = await fetch(LOCAL_FILE_NAME);
                    if (response.ok) {
                        fileStatusElement.textContent = 'محمل';
                        fileStatusElement.style.color = '#56d364';
                        
                        // الحصول على معلومات الملف
                        const blob = await response.blob();
                        fileSizeElement.textContent = formatFileSize(blob.size);
                        
                        // معاينة محتوى الملف
                        const text = await response.text();
                        showFilePreview(text);
                        
                        // الحصول على تاريخ التعديل
                        const headers = response.headers;
                        const lastModified = headers.get('last-modified');
                        if (lastModified) {
                            fileLastModifiedElement.textContent = new Date(lastModified).toLocaleString('ar-EG');
                        }
                    } else {
                        fileStatusElement.textContent = 'غير محمل';
                        fileStatusElement.style.color = '#f85149';
                    }
                } catch (error) {
                    console.log('الملف المحلي غير موجود بعد:', error);
                    fileStatusElement.textContent = 'غير محمل';
                    fileStatusElement.style.color = '#f85149';
                }
            }
            
            // تحديث/تحميل الملف
            async function updateFile() {
                // إعادة تعليمات الزر والتقدم
                updateBtn.disabled = true;
                updateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحديث...';
                progressContainer.style.display = 'block';
                progressBar.style.width = '0%';
                progressText.textContent = '0%';
                
                try {
                    showStatus('جاري الاتصال بمستودع GitHub...', 'info');
                    
                    // استخدام fetch مع تتبع التقدم
                    const response = await fetch(GITHUB_FILE_URL);
                    
                    if (!response.ok) {
                        throw new Error(`خطأ في الشبكة: ${response.status}`);
                    }
                    
                    // الحصول على حجم المحتوى
                    const contentLength = response.headers.get('content-length');
                    const totalBytes = contentLength ? parseInt(contentLength) : null;
                    let loadedBytes = 0;
                    
                    // قارئ تيار البيانات
                    const reader = response.body.getReader();
                    const chunks = [];
                    
                    // قراءة البيانات
                    while (true) {
                        const { done, value } = await reader.read();
                        
                        if (done) break;
                        
                        chunks.push(value);
                        loadedBytes += value.length;
                        
                        // تحديث شريط التقدم
                        if (totalBytes) {
                            const progress = Math.round((loadedBytes / totalBytes) * 100);
                            progressBar.style.width = `${progress}%`;
                            progressText.textContent = `${progress}%`;
                        } else {
                            // إذا لم يكن حجم الملف معروفاً، نعرض تقدماً وهمياً
                            const progress = Math.min(95, loadedBytes / 10000 * 100);
                            progressBar.style.width = `${progress}%`;
                            progressText.textContent = `${Math.round(progress)}%`;
                        }
                    }
                    
                    // تجميع البيانات
                    const blob = new Blob(chunks);
                    const text = await blob.text();
                    
                    // حفظ الملف محلياً (في ذاكرة المتصفح)
                    saveFileLocally(text);
                    
                    // عرض معاينة للملف
                    showFilePreview(text);
                    
                    // تحديث الإحصائيات
                    downloadCount++;
                    downloadCountElement.textContent = downloadCount;
                    localStorage.setItem('downloadCount', downloadCount);
                    
                    lastUpdateTime = new Date().toISOString();
                    lastUpdateElement.textContent = new Date(lastUpdateTime).toLocaleString('ar-EG');
                    localStorage.setItem('lastUpdateTime', lastUpdateTime);
                    
                    // تحديث معلومات الملف
                    fileStatusElement.textContent = 'محمل';
                    fileStatusElement.style.color = '#56d364';
                    fileSizeElement.textContent = formatFileSize(blob.size);
                    fileLastModifiedElement.textContent = new Date().toLocaleString('ar-EG');
                    
                    // إظهار رسالة النجاح
                    showStatus('تم تحديث الملف بنجاح! تم حفظ نسخة محلية.', 'success');
                    
                    // إكمال شريط التقدم
                    progressBar.style.width = '100%';
                    progressText.textContent = '100%';
                    
                } catch (error) {
                    console.error('حدث خطأ أثناء التحديث:', error);
                    showStatus(`حدث خطأ: ${error.message}. حاول مرة أخرى.`, 'error');
                } finally {
                    // إعادة تعليمات الزر
                    setTimeout(() => {
                        updateBtn.disabled = false;
                        updateBtn.innerHTML = '<i class="fas fa-download"></i> تحديث/تحميل الملف الآن';
                        progressContainer.style.display = 'none';
                    }, 1500);
                }
            }
            
            // حفظ الملف محلياً (في ذاكرة المتصفح)
            function saveFileLocally(content) {
                try {
                    // إنشاء رابط تحميل
                    const blob = new Blob([content], { type: 'text/x-python' });
                    const url = URL.createObjectURL(blob);
                    
                    // إنشاء عنصر تحميل
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = LOCAL_FILE_NAME;
                    a.style.display = 'none';
                    
                    document.body.appendChild(a);
                    a.click();
                    
                    // تنظيف
                    setTimeout(() => {
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);
                    }, 100);
                    
                    // تخزين في localStorage للمعاينة
                    localStorage.setItem('lastFileContent', content);
                    localStorage.setItem('lastFileUpdate', new Date().toISOString());
                    
                } catch (error) {
                    console.error('خطأ في حفظ الملف محلياً:', error);
                }
            }
            
            // عرض معاينة للملف
            function showFilePreview(content) {
                // عرض أول 20 سطر من الملف
                const lines = content.split('\n').slice(0, 20);
                const preview = lines.join('\n');
                
                if (preview.length < content.length) {
                    filePreviewElement.innerHTML = highlightPythonSyntax(preview + '\n\n... (المزيد من المحتوى)');
                } else {
                    filePreviewElement.innerHTML = highlightPythonSyntax(preview);
                }
            }
            
            // تمييز بناء الجملة لبايثون
            function highlightPythonSyntax(code) {
                return code
                    .replace(/(#.*)/g, '<span class="comment">$1</span>')
                    .replace(/(\"\"\"[\s\S]*?\"\"\"|''''[\s\S]*?'''|"[\s\S]*?"|'[\s\S]*?')/g, '<span class="string">$1</span>')
                    .replace(/\b(def|class|if|else|elif|for|while|return|import|from|as|try|except|finally|with)\b/g, '<span class="keyword">$1</span>')
                    .replace(/\b(True|False|None)\b/g, '<span class="constant">$1</span>')
                    .replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>');
            }
            
            // تنسيق حجم الملف
            function formatFileSize(bytes) {
                if (!bytes || bytes === 0) return 'غير معروف';
                
                const k = 1024;
                const sizes = ['بايت', 'كيلوبايت', 'ميجابايت', 'جيجابايت'];
                const i = Math.floor(Math.log(bytes) / Math.log(k));
                
                return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
            }
            
            // عرض رسالة الحالة
            function showStatus(message, type = 'info') {
                statusMessage.textContent = message;
                statusMessage.className = `status-message ${type}`;
                
                // إخفاء الرسالة بعد 5 ثوانٍ (ما عدا الأخطاء)
                if (type !== 'error') {
                    setTimeout(() => {
                        statusMessage.style.display = 'none';
                    }, 5000);
                }
            }
            
            // إعداد أحداث المستخدم
            function setupEventListeners() {
                // حدث النقر على زر التحديث
                updateBtn.addEventListener('click', updateFile);
                
                // حدث لرابط التحميل المباشر
                downloadDirectLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    updateFile();
                });
                
                // حدث لرابط عرض الملف المحلي
                viewFileLink.addEventListener('click', function(e) {
                    if (localStorage.getItem('lastFileContent')) {
                        // فتح نافذة جديدة لعرض المحتوى
                        const newWindow = window.open();
                        newWindow.document.write(`
                            <!DOCTYPE html>
                            <html>
                            <head>
                                <title>معاينة Bot.py</title>
                                <style>
                                    body { background: #0d1117; color: #c9d1d9; padding: 20px; }
                                    pre { background: #161b22; padding: 20px; border-radius: 10px; }
                                </style>
                            </head>
                            <body>
                                <h2>محتوى ملف Bot.py</h2>
                                <pre>${localStorage.getItem('lastFileContent')}</pre>
                            </body>
                            </html>
                        `);
                    } else {
                        e.preventDefault();
                        showStatus('لم يتم تحميل الملف بعد. الرجاء النقر على زر التحديث أولاً.', 'error');
                    }
                });
                
                // تأثيرات للزر
                updateBtn.addEventListener('mousedown', function() {
                    this.style.transform = 'scale(0.98)';
                });
                
                updateBtn.addEventListener('mouseup', function() {
                    this.style.transform = 'translateY(-3px)';
                });
            }
            
            // بدء تشغيل التطبيق
            initPage();
            setupEventListeners();
        });
    </script>
</body>
</html>