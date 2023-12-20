// 浮動回到最上方按鈕
 
document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
