document.addEventListener("DOMContentLoaded", () => {
    
    const phoneButtons = document.querySelectorAll(".phone-link, .float-btn.phone");
    const zaloButtons = document.querySelectorAll(".zalo-link, .float-btn.zalo");

    phoneButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log("Khách hàng nhấn gọi điện trực tiếp.");
        });
    });

    zaloButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log("Khách hàng nhấn mở Zalo.");
        });
    });
});