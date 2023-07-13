
function calcularDescuento(destino) {
    var Costa = "La costa del sol";
    var Panchimalco = "Panchimalco";
    var Puerto = "Puerto el triunfo";
    var descuento = 0;

    if (destino === Costa) {
        descuento = 0.05;
    } else if (destino === Panchimalco) {
        descuento = 0.1;
    } else if (destino === Puerto) {
        descuento = 0.15;
    }

    var resultadoElement = document.getElementById('resultado');
    if (descuento > 0) {
        resultadoElement.innerHTML = "<br><div class='alert alert-success' role='alert'><strong>Se aplicará un descuento del " + (descuento * 100) + "% en el viaje</strong></div>";
    } else {
        resultadoElement.innerHTML = "<div class='alert alert-danger' role='alert'><strong>No se aplica descuento en el viaje</strong></div>";
    }
}
