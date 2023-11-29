// calculator.js
export function calculate() {
    // 獲取輸入的值
    var nasValue = parseFloat(document.getElementById("nas").value);
    var degValue = parseFloat(document.getElementById("deg").value);
    var moValue = parseFloat(document.getElementById("mo").value);
    var ncValue = parseFloat(document.getElementById("nc").value);

    // 如果 Completeness 是數字，則將其轉換為數字；否則，從字符串中提取數字部分
    var inpcValue = document.getElementById("inpc").value;
    if (inpcValue.includes('%')) {
        inpcValue = parseFloat(inpcValue) / 100;
    } else {
        inpcValue = parseFloat(inpcValue);
    }

    // 計算總和
    var total = nasValue + moValue + ncValue + inpcValue;

    // 顯示結果
    document.getElementById("result").innerText = "Total: " + total;
}
