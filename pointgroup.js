function updatenas() {
    // 獲取選中的下拉選單的值
    var selectedpointgroup = document.getElementById("pg").value;

    // 使用switch語句設置對應的數值
    var nas;
    switch (selectedpointgroup.toLowerCase()) {
        case "p1":     // space group = P1
            nas = "1";  //number of asymmetric
            break;
        case "p2":
            nas = "2"; 
            break;
        case "p222":
            nas = "4"; 
            break;
        case "p4":
            nas = "4"; 
            break;
        case "p422":
            nas = "8"; 
            break;
        case "p3":
            nas = "3"; 
            break;
        case "p312":
            nas = "6"; 
            break;
        case "p321":
            nas = "6"; 
            break;
        case "p6":
            nas = "6"; 
            break;
        case "p622":
            nas = "12"; 
            break;
        case "i23":
            nas = "12"; 
            break;
        case "i432":
            nas = "24"; 
            break;
        default:
            nas = "1"; 
    }

    // 更新價格輸入框的值
    document.getElementById("nas").value = nas;
}

