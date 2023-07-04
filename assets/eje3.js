// Ejercicio3
// Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. Para este ejercicio deberá de asignar las siguientes variables: Nombre, Salario, categoría y aumento. Deberá demostrar en html los datos del empleado y el aumento salarial.

//       CATEGORIA       AUMENTO
//           A           15%
//           B           30%
//           C           10%
//           D           20%


function calcularAumento() {
    // Obtener los valores ingresados por el usuario
    let nombre = document.getElementById("nombre").value;
    let salario = parseFloat(document.getElementById("salario").value);
    let categoria = document.getElementById("categoria").value;

    // Definir el porcentaje de aumento según la categoría
    let aumentoPorcentaje;
    switch (categoria) {
        case 'A':
            aumentoPorcentaje = 0.15;
            break;
        case 'B':
            aumentoPorcentaje = 0.30;
            break;
        case 'C':
            aumentoPorcentaje = 0.10;
            break;
        case 'D':
            aumentoPorcentaje = 0.20;
            break;
        default:
            aumentoPorcentaje = 0;
    }

    // Calcular el aumento y el nuevo salario
    let aumento = salario * aumentoPorcentaje;
    let nuevoSalario = salario + aumento;

    // Mostrar los resultados en la página
    document.getElementById("resultado").innerHTML = `
        <p><strong>Nombre del empleado:</strong> ${nombre}</p>
        <p><strong>Salario actual:</strong> ${salario} USD</p>
        <p><strong>Categoría:</strong> ${categoria}</p>
        <p><strong>Aumento Salarial:</strong> ${aumento.toFixed(2)} USD (${(aumentoPorcentaje * 100).toFixed(0)}%)</p>
        <p><strong>Salario Nuevo:</strong> ${nuevoSalario.toFixed(2)} USD</p>
    `;
}