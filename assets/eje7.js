// EJERCICIO 7: 

// Realizar programa para una web, en el cual el usuario introduce 2 notas y su valor ponderado (como cuando un examen vale un 30% y otro examen el 70%). Pulsando el botón “Calcula”, la web muestra como resultado la nota media ponderada.

function calcularNotaMediaPonderada() {
    // Obtener los valores de las notas y ponderaciones
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let ponderacion1 = parseFloat(document.getElementById("ponderacion1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let ponderacion2 = parseFloat(document.getElementById("ponderacion2").value);

    // Calcular la nota media ponderada
    let notaMediaPonderada = (nota1 * ponderacion1 + nota2 * ponderacion2) / (ponderacion1 + ponderacion2);

    // Mostrar el resultado en la página
    document.getElementById("resultado").textContent = "La nota media ponderada es: " + notaMediaPonderada.toFixed(2);
}