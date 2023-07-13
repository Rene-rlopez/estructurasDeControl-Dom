function infoCar() {
    let descuentoFiesta = 0.5;
    let descuentoFocus = 0.10;
    let descuentoEscape = 0.20;
    let seleccionado = document.querySelector("#lista").value;
    let resultado = document.getElementById("resultado");
  
    if (seleccionado === "selected") {
      resultado.innerHTML = "<div class='alert alert-danger' role='alert'><strong>Elige un vehiculo</strong></div>";
    } else if (seleccionado === "Ford Fiesta") {
      let precio = 22000;
      let total = precio - descuentoFiesta;
      resultado.innerHTML = `<div class="card text-center border-secondary ">
          <div class="card-header border-secondary ">
              Compra de vehiculo
          </div>
          <div class="card-body">
              <img src="./assets/img/fiesta.jpg" class="card-img-top" alt="...">
              <h5 class="card-title"><strong>Vehiculo: </strong>FORD FESTA</h5>
              <p class="card-text"><strong>Información: </strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel optio, eveniet distinctio ad esse vitae dolorem provident, nihil maiores libero aut voluptas aliquam consectetur itaque sed dolores hic, magnam veritatis?</p>
              <p class="card-text"><strong>Precio: </strong>${total}</p>
              <a href="#" class="btn btn-primary">Comprar</a>
          </div>
          <div class="card-footer text-muted border-secondary ">
              
          </div>
      </div>`;
    } else if (seleccionado === "Ford Focus") {
      let precio = 25000;
      let total = precio - descuentoFocus;
      resultado.innerHTML = `<div class="card text-center border-danger">
          <div class="card-header border-danger">
              Compra de vehiculo
          </div>
          <div class="card-body">
              <img src="./assets/img/focus.jpeg" class="card-img-top" alt="...">
              <h5 class="card-title"><strong>Vehiculo: </strong>FORD FOCUS</h5>
              <p class="card-text"><strong>Información: </strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, beatae. Iste explicabo voluptate qui, doloribus reiciendis molestias accusamus saepe dolorem fugit. Cupiditate, quod mollitia recusandae ex aut quos aperiam expedita.</p>
              <p class="card-text"><strong>Precio: </strong>${total}</p>
              <a href="#" class="btn btn-primary">Comprar</a>
          </div>
          <div class="card-footer text-muted border-danger">
              
          </div>
      </div>`;
    } else if (seleccionado === "Ford Escape") {
      let precio = 38000;
      let total = precio - descuentoEscape;
      resultado.innerHTML = `<div class="card text-center border-primary">
          <div class="card-header border-primary">
              Compra de vehiculo
          </div>
          <div class="card-body">
              <img src="./assets/img/escape.jpg" class="card-img-top" alt="...">
              <h5 class="card-title"><strong>Vehiculo: </strong>FORD ESCAPE</h5>
              <p class="card-text"><strong>Información: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum reiciendis tenetur quos vel voluptates assumenda unde dicta aperiam! Dolorem soluta nesciunt aperiam alias quibusdam pariatur tempore esse nisi illo possimus.</p>
              <p class="card-text"><strong>Precio: </strong>${total}</p>
              <a href="#" class="btn btn-primary">Comprar</a>
          </div>
          <div class="card-footer text-muted border-primary">
              
          </div>
      </div>`;
    } else {
      resultado.innerHTML = "<div class='alert alert-danger' role='alert'><strong>No has elegido un vehiculo</strong></div>";
    }
  }
  