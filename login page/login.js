const login = document.getElementById("login-form");

if (login)
    login.addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "admin123") {
        window.location.href = "http://127.0.0.1:5500/homepage-test.html";
        alert("Login berhasil!");
    } else {
        document.querySelector(".message").textContent = "Username atau password salah!";
    }
});
