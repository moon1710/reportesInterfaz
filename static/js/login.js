window.addEventListener("DOMContentLoaded", () => {
  const pwd = document.getElementById("password");
  const toggle = document.getElementById("togglePassword");
  const form = document.getElementById("loginForm");
  const submitBtn = document.getElementById("submitBtn");

  // Mostrar/ocultar contraseña
  toggle.addEventListener("click", () => {
    pwd.type = pwd.type === "password" ? "text" : "password";
    toggle.innerHTML = `<i data-lucide="${
      pwd.type === "password" ? "Eye" : "EyeOff"
    }"></i>`;
    lucide.replace();
  });

  // Simular autenticación y redirección
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitBtn.textContent = "Iniciando sesión...";
    submitBtn.disabled = true;
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  });
});
