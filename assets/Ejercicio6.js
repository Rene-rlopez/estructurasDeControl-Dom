function calcularDescuento() {
    var origen = document.getElementById('origen').value.toLowerCase();
    var destino = document.getElementById('destino').value.toLowerCase();
    var descuento = 0;
    
    if (origen === "palma" && destino === "la costa del sol") {
        descuento = 0.05;
    } else if (destino === "panchimalco") {
        descuento = 0.1;
    } else if (destino === "puerto el triunfo") {
        descuento = 0.15;
    }

    var resultadoElement = document.getElementById('resultado');
    if (descuento > 0) {
        resultadoElement.innerHTML = "se aplicara un descuento del " + (descuento * 100) + "% en el viaje";
    } else {
        resultadoElement.innerHTML = "no se aplica descuento en el viaje.";
    }
}