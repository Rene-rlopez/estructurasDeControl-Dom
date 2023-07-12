function calcularNotaFinal() {
    var nombre = document.getElementById("nombre").value;
    var carnet = document.getElementById("carnet").value;
    var examen = document.getElementById("examen").value;
    var tareas = document.getElementById("tareas").value;
    var asistencias = document.getElementById("asistencias").value;
    var investigacion = document.getElementById("investigacion").value;
    var resultado = document.getElementById("result");

    var notaFinal = (examen) + (tareas) + (asistencias) + (investigacion) / 4;
    

    resultado.innerHTML = `
        <p><strong>Nombre:</strong>${nombre}</p>
        <p><strong>Carnet:</strong>${carnet}</p>
        <p><strong>Nota Final:</strong>${notaFinal}</p>`;
}

