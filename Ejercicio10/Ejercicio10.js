const regex = /https:\/\/[^\s]+/g;

document.getElementById("botonBuscar").addEventListener("click", function () {
    const texto = document.getElementById("texto").value;
    const urls = texto.match(regex);
    
    if (urls) {
        document.getElementById("resultado").textContent = urls.join("\n");
    } else {
        document.getElementById("resultado").textContent =
        `No se encontraron URLs seguras.`;
    }
});