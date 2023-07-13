function mostrarTabla() {
    let number = document.getElementById("number").value;
    let tablaHTML = "<h3>tabla de mumtiplicar del " + number + "</h3>";
    tablaHTML += "<table class='table'><thead><tr><th>Numero</th><th>Resutado</th></tr></thead><tbody>";

    for (let i = 1; i <= 10; i++){
        tablaHTML += "<tr><td>" + number + " x " + i + "</td><td>" + (number * i) + "</td></tr>";
    }

    tablaHTML += "</tbody></table>";

    document.getElementById("tabla").innerHTML = tablaHTML;
}