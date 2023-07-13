function compararNumeros() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa dos números válidos.";
    } else if (numero1 > numero2) {
        document.getElementById("resultado").textContent = "El número mayor es: " + numero1;
    } else if (numero2 > numero1) {
        document.getElementById("resultado").textContent = "El número mayor es: " + numero2;
    } else {
        document.getElementById("resultado").textContent = "Los números son iguales.";
    }
}
