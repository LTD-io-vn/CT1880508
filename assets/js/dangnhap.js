document.addEventListener("DOMContentLoaded", () => {
    
    const loginForm = document.querySelector(".login-card form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            
            e.preventDefault();

            const username = usernameInput ? usernameInput.value.trim() : "";
            const password = passwordInput ? passwordInput.value.trim() : "";

            
            if (!username) {
                alert("Vui lòng nhập tên tài khoản hoặc địa chỉ email!");
                usernameInput.focus();
                return;
            }

            if (!password) {
                alert("Vui lòng nhập mật khẩu!");
                passwordInput.focus();
                return;
            }

            if (password.length < 6) {
                alert("Mật khẩu phải chứa ít nhất 6 ký tự!");
                passwordInput.focus();
                return;
            }

            
            const userData = {
                username: username,
                isLoggedIn: true,
                loginTime: new Date().toISOString()
            };

            localStorage.setItem("currentUser", JSON.stringify(userData));

            alert("Đăng nhập thành công!");

            
            window.location.href = "trangchu.html";
        });
    }

    
    const togglePasswordBtn = document.getElementById("toggle-password");
    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener("click", () => {
            
            const isPassword = passwordInput.getAttribute("type") === "password";
            passwordInput.setAttribute("type", isPassword ? "text" : "password");

            
            togglePasswordBtn.classList.toggle("fa-eye");
            togglePasswordBtn.classList.toggle("fa-eye-slash");
        });
    }
});