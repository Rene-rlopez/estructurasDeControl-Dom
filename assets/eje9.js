function numerosEnteros() {
    let numeros = document.getElementById("num").value;
    let resultado = document.getElementById("resultado");
    let arrayNumeros = numeros.split(",");

    let numerosNegativos = 0;
    let numerosPositivos = 0;
    let numerosMultiplos15 = 0;
    let numerosPares = 0;

    resultado.innerHTML = "";

    arrayNumeros.forEach(numero => {
        let numerico = parseInt(numero);
        
        if (numerico < 0) {
            numerosNegativos++;
        } else if (numerico > 0) {
            numerosPositivos++;
        }
        
        if (numerico % 15 === 0) {
            numerosMultiplos15++;
        }
        
        if (numerico % 2 === 0) {
            numerosPares++;
        }
    });

    resultado.innerHTML += `<div class='alert alert-danger' role='alert'><strong>Numeros Negativos:</strong> ${numerosNegativos}</div>`;
    resultado.innerHTML += `<div class='alert alert-primary' role='alert'><strong>Numeros Positivos:</strong> ${numerosPositivos}</div>`;
    resultado.innerHTML += `<div class='alert alert-warning' role='alert'><strong>Numeros Multiplos de 15:</strong> ${numerosMultiplos15}</div>`;
    resultado.innerHTML += `<div class='alert alert-info' role='alert'><strong>Numeros Pares:</strong> ${numerosPares}</div>`;
}
