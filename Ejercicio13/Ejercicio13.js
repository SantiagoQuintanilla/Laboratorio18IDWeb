const texto = "La fecha del evento es 25/12/2025 y la siguiente es 01/01/2026";
const regex = /\b\d{2}\/\d{2}\/\d{4}\b/g;
const fechas = texto.match(regex);

document.getElementById("resultado").textContent = JSON.stringify(fechas);