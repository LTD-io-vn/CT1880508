document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector(".login-card form");

    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const usernameInput = document.getElementById("reg-username");
            const emailInput = document.getElementById("reg-email");
            const passwordInput = document.getElementById("reg-password");
            const confirmPasswordInput = document.getElementById("reg-confirm-password");

            const username = usernameInput ? usernameInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";
            const password = passwordInput ? passwordInput.value.trim() : "";
            const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value.trim() : "";

            
            if (!username) {
                alert("Vui lòng nhập tên tài khoản!");
                usernameInput.focus();
                return;
            }

            if (!email) {
                alert("Vui lòng nhập địa chỉ email!");
                emailInput.focus();
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Địa chỉ email không hợp lệ!");
                emailInput.focus();
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

            
            if (password !== confirmPassword) {
                alert("Mật khẩu xác nhận không trùng khớp!");
                confirmPasswordInput.focus();
                return;
            }

            
            let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

            const isUsernameExist = registeredUsers.some(user => user.username === username);
            const isEmailExist = registeredUsers.some(user => user.email === email);

            if (isUsernameExist) {
                alert("Tên tài khoản này đã được đăng ký!");
                usernameInput.focus();
                return;
            }

            if (isEmailExist) {
                alert("Địa chỉ email này đã được sử dụng!");
                emailInput.focus();
                return;
            }

            
            const newUser = {
                username: username,
                email: email,
                password: password,
                createdAt: new Date().toISOString()
            };

            registeredUsers.push(newUser);
            localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

            alert("Đăng ký tài khoản thành công! Hãy đăng nhập ngay.");
            window.location.href = "dangnhap.html";
        });
    }
});