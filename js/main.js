function simulacro() {
    let cantidadDeProductos = Math.random () > 0.5;
    
    if (cantidadDeProductos) {       //Algoritmo condicional 
        let medioDePago = prompt("Desea pagar con: Mercado Pago, Tarjeta Debito, Tarjeta Credito").toLocaleLowerCase(); 
        if (medioDePago == "mercado pago") {
            alert("Usted realizo el pago con Mercado Pago");
        }else if (medioDePago == "tarjeta credito") {
            alert("Usted realizo el pago con Tarjeta de Credito");
        }else if (medioDePago == "tarjeta debito") {
            alert("Usted realizo el pago con Tarjeta de Debito");
        }else {
            alert("Medio de pago incorrecto");
        }
    }else {
        alert("Ups! No se ha podido realizar la compra ya que no hay ningun producto en el carrito");
    }
    
    
    let agregarAlCarrito = true; 
    let precioFinal = 0;
    
    while(agregarAlCarrito) {      //Algoritmo con ciclos
        let precio = parseInt(prompt("Agregar precio al carrito, si no queres agregar mas escribir 0"));
        if (precio == 0) {
            break;
        }else {
            precioFinal = precioFinal + precio;
        }
    }
    
    alert("El precio final es: $" + precioFinal);
}

simulacro();



