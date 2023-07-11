function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;

    if (nombre === "" || apellido === "" || email === "") {
        alert("No ha completado el formulario. Por favor, llene todos los campos.");
        return false; 
    } else {
        alert("Datos ingresados:\n\nNombre: " + nombre + "\nApellido: " + apellido + "\nEmail: " + email);
        return true; 
    }
}