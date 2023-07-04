function obtenerDatos() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let resultadoDiv = document.getElementById("resultado");

    if (edad >= 18) {
        resultadoDiv.innerHTML = "<div class='alert alert-success' role='alert'><strong>Bienvenido, </strong>" + nombre + "<strong>. Tu edad es: </strong>" + edad + "</div>";
    } else {
        resultadoDiv.innerHTML = "<div class='alert alert-danger' role='alert'><strong>Lo siento, </strong>" + nombre + "<strong>. Aún no cumples con la edad: </strong>" + edad + "</div>";
    }
}