function calcularPromedios() {
    let mananaEdades = [
        parseInt(document.getElementById("manana1").value),
        parseInt(document.getElementById("manana2").value),
        parseInt(document.getElementById("manana3").value),
        parseInt(document.getElementById("manana4").value),
        parseInt(document.getElementById("manana5").value)
    ];

    let tardeEdades = [
        parseInt(document.getElementById("tarde1").value),
        parseInt(document.getElementById("tarde2").value),
        parseInt(document.getElementById("tarde3").value),
        parseInt(document.getElementById("tarde4").value),
        parseInt(document.getElementById("tarde5").value),
        parseInt(document.getElementById("tarde6").value)
    ];

    let nocheEdades = [
        parseInt(document.getElementById("noche1").value),
        parseInt(document.getElementById("noche2").value),
        parseInt(document.getElementById("noche3").value),
        parseInt(document.getElementById("noche4").value),
        parseInt(document.getElementById("noche5").value),
        parseInt(document.getElementById("noche6").value),
        parseInt(document.getElementById("noche7").value),
        parseInt(document.getElementById("noche8").value),
        parseInt(document.getElementById("noche9").value),
        parseInt(document.getElementById("noche10").value),
        parseInt(document.getElementById("noche11").value)
    ];

 
    let promedioManana = calcularPromedio(mananaEdades);
    let promedioTarde = calcularPromedio(tardeEdades);
    let promedioNoche = calcularPromedio(nocheEdades);

    document.getElementById("resultado").innerHTML = "Promedio del turno mañana: " + promedioManana.toFixed(2) + "<br>" +
        "Promedio del turno tarde: " + promedioTarde.toFixed(2) + "<br>" +
        "Promedio del turno noche: " + promedioNoche.toFixed(2) + "<br>";

    if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
        document.getElementById("resultado").innerHTML += "El turno mañana tiene un promedio mayor de edades.";
    } else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
        document.getElementById("resultado").innerHTML += "El turno tarde tiene un promedio mayor de edades.";
    } else if (promedioNoche > promedioManana && promedioNoche > promedioTarde) {
        document.getElementById("resultado").innerHTML += "El turno noche tiene un promedio mayor de edades.";
    } else {
        document.getElementById("resultado").innerHTML += "Hay dos o más turnos con el mismo promedio mayor de edades.";
    }
}

function calcularPromedio(edades) {
    let suma = 0;
    for (let i = 0; i < edades.length; i++) {
        suma += edades[i];
    }
    return suma / edades.length;
}
