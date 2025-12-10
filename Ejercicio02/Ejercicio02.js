async function cargarUsuario() {
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/users/10");
        const data=await response.json();
        console.log("Nombre:", data.name);
        console.log("Username:", data.username);
        console.log("Email:", data.email);
    } catch (error) {
        console.error(error);
    }
}

cargarUsuario();