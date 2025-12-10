function cargarUsuarios() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            data.forEach(u => console.log(u.name));
        })
        .catch(error => console.error(error));
}

cargarUsuarios();