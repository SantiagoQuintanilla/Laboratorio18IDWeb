async function cargarUsuarios() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        data.forEach(u => console.log(u.name));
    } catch (error) {
        console.error(error);
    }
}

cargarUsuarios();