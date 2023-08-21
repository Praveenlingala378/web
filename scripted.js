document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    if (username.value === "user" && password.value === "password") {
      alert("Login successful!");
      setTimeout(() => {
        window.location.href = "home.html";
      }, 500);
    } else {
      alert("Invalid username or password.");
    }
  });
  
});
