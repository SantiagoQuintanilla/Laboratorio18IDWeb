const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

document.getElementById("botonValidar").addEventListener("click", function () {
    const pwd = document.getElementById("pwd").value;
    const ok = regex.test(pwd);
    document.getElementById("resultado").textContent = ok ? "Contraseña válida" : "Contraseña inválida. Debe tener mínimo 8 caracteres, al menos 1 mayúscula, 1 minúscula y 1 número.";
});