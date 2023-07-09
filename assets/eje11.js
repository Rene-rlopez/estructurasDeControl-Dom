// EJERCICIO 11: 

// Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
//          Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
//          Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
//          Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
//          Si no está entre ningún caso anterior la frase “Temperatura desconocida”

// Formula para convertir grados Celsius a Fahrenheit: (0 °C × 9/5) + 32 = 32 °F


function convertirTemperatura() {
    let temperaturaCelsius = parseFloat(document.getElementById("celsius").value);
    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    let resultadoElement = document.getElementById("resultado");

    resultadoElement.innerHTML = "Temperatura en Fahrenheit: " + temperaturaFahrenheit.toFixed(2);

    if (temperaturaFahrenheit >= 14 && temperaturaFahrenheit < 32) {
        resultadoElement.innerHTML += "<br>Temperatura baja";
    } else if (temperaturaFahrenheit >= 32 && temperaturaFahrenheit < 68) {
        resultadoElement.innerHTML += "<br>Temperatura adecuada";
    } else if (temperaturaFahrenheit >= 68 && temperaturaFahrenheit < 96) {
        resultadoElement.innerHTML += "<br>Temperatura alta";
    } else {
        resultadoElement.innerHTML += "<br>Temperatura desconocida";
    }
}