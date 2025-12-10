const texto = "<h1>Hola</h1>";
const regex = /<h1>|<\/h1>/g;
const limpio = texto.replace(regex, "");

document.getElementById("resultado").textContent = limpio;