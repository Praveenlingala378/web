document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    if (username.value === "user" && password.value === "password") {
      loginForm.classList.add("success");
      setTimeout(() => {
        alert("Login successful!");
      }, 500); // Show success animation for 0.5 seconds
    } else {
      loginForm.classList.add("error");
      setTimeout(() => {
        loginForm.classList.remove("error");
        username.value = "";
        password.value = "";
      }, 1000); // Show error animation for 1 second
    }
  });
});