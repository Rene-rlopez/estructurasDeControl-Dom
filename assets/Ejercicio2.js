function calcularNotaFinal() {
    let nombre = document.getElementById("nombre").value;
    let carnet = document.getElementById("carnet").value;
    let examen = document.getElementById("examen").value;
    let tareas = document.getElementById("tareas").value;
    let asistencias = document.getElementById("asistencias").value;
    let investigacion = document.getElementById("investigacion").value;
    let resultado = document.getElementById("result");

    let notaFinal = (examen) + (tareas) + (asistencias) + (investigacion) / 4;
    
    resultado.innerHTML = `
        <p><strong>Nombre:</strong>${nombre}</p>
        <p><strong>Carnet:</strong>${carnet}</p>
        <p><strong>Nota Final:</strong>${notaFinal}</p>`;
}

