function cargarUsuario() {
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(response => response.json())
        .then(data => {
            console.log("Nombre:", data.name);
            console.log("Username:", data.username);
            console.log("Email:", data.email);
        })
        .catch(error => {
            console.error("Error al obtener el usuario:", error);
        });
}

cargarUsuario();