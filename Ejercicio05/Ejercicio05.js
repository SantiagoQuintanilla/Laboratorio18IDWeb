document.getElementById("boton_Cargar").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(response => response.json())
        .then(data => {
            document.getElementById("nombre").textContent = data.name;
            document.getElementById("email").textContent = data.email;
            document.getElementById("ciudad").textContent = data.address.city;
        })
        .catch(error => console.error(error));
});