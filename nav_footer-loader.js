(function() {
    // 1. 定義共用載入函式
    function loadComponent(elementId, fileName, callback) {
        const element = document.getElementById(elementId);
        if (!element) return;

        fetch(fileName)
            .then(response => {
                if (!response.ok) throw new Error('找不到檔案：' + fileName);
                return response.text();
            })
            .then(data => {
                element.innerHTML = data;
                if (callback) callback();
            })
            .catch(err => console.error(err));
    }

    // 2. 執行載入導覽列
    loadComponent('navbar-placeholder', 'navbar.html');

    // 3. 執行載入頁尾 (包含之前的年份與致謝邏輯)
    loadComponent('footer-placeholder', 'footer.html', function() {
        // 更新年份
        const year = new Date().getFullYear();
        if(document.getElementById('current-year-zh')) 
            document.getElementById('current-year-zh').textContent = year;
        if(document.getElementById('current-year-en')) 
            document.getElementById('current-year-en').textContent = year;

        // 處理致謝 Acknowledgment
        const ackType = document.body.dataset.ack; 
        const ackSection = document.getElementById('ack-section');
        const ackText = document.getElementById('ack-text');

        if (ackType && ackSection && ackText) {
            if (ackType === "CheMa") {
                ackText.textContent = "Structure Courtesy of Dr. Che Ma";
                ackSection.style.visibility = "visible";
            } else if (ackType === "CJChen") {
                ackText.textContent = "Structure Courtesy of Dr. Chun-Jung Chen";
                ackSection.style.visibility = "visible";
            }
        }
    });
})();