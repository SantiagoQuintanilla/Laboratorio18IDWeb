document.getElementById("boton_Cargar").addEventListener("click", cargarUsuario);

async function cargarUsuario() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const data = await response.json();
        document.getElementById("nombre").textContent = data.name;
        document.getElementById("email").textContent = data.email;
        document.getElementById("ciudad").textContent = data.address.city;
    } catch (error) {
        console.error(error);
    }
}