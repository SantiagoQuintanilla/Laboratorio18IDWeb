const texto = "Hola. Cómo estás? Bien!";
const partes = texto.split(/[\.\?\!]/).map(x => x).filter(x => x !== "");

document.getElementById("resultado").textContent = JSON.stringify(partes);