function validateLogin(email, password) {
    if (!email || !password) return "Fields cannot be empty";
    if (!email.includes("@")) return "Invalid email";
    if (password.length < 6) return "Password too short";
    return "Login successful";
  }
  
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const result = validateLogin(email, password);
    document.getElementById("message").innerText = result;
  });
  