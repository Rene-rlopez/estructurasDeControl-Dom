function calcularDescuento() {
    let Costa = "Costa";
    let Panchimalco = "Panchimalco";
    let Puerto = "Puerto";
    let pCosta = 50;
    let pPanchimalco = 100;
    let pPuerto = 125;
    let descuentoCosta = 0.05;
    let descuentoPanchi = 0.1;
    let descuentoPuerto = 0.15;
    let descuento = 0;

    totalC = descuentoCosta * pCosta;
    totalCosta = pCosta - totalC;

    totalP = descuentoPanchi * pPanchimalco;
    totalPanchimalco = pPanchimalco - totalP;

    totalpuerto = descuentoPuerto * pPuerto;
    totalPuertoo = pPuerto - totalpuerto;
    let selectedDestination = event.target.id;

    if (selectedDestination === Costa) {
        descuento = 0.05;
    } else if (selectedDestination === Panchimalco) {
        descuento = 0.1;
    } else if (selectedDestination === Puerto) {
        descuento = 0.15;
    }

    let resultadoElement = document.getElementById('resultado');
    if (selectedDestination === Costa) {
        resultadoElement.innerHTML = "<br><div class='alert alert-success' role='alert'><strong>Se aplicará un descuento del " + (descuento * 100) + "% en el viaje del costo, su total sera $"+ totalCosta+"</strong></div>";
    } else if (selectedDestination === Panchimalco){
        resultadoElement.innerHTML = "<br><div class='alert alert-success' role='alert'><strong>Se aplicará un descuento del " + (descuento * 100) + "% en el viaje del costo, su total sera $"+ totalPanchimalco+"</strong></div>";
    }else if (selectedDestination === Puerto){
        resultadoElement.innerHTML = "<br><div class='alert alert-success' role='alert'><strong>Se aplicará un descuento del " + (descuento * 100) + "% en el viaje del costo, su total sera $"+ totalPuertoo+"</strong></div>";
    } 
    else {
        resultadoElement.innerHTML = "<div class='alert alert-danger' role='alert'><strong>No se aplica descuento en el viaje</strong></div>";
    }
}