let agregarAlCarrito = true;    //Algoritmo con ciclos
let precioFinal = 0;

while(agregarAlCarrito) {
    let precio = parseInt(prompt("Agregar precio al carrito (o 0 para salir)"));
    if (isNaN(precio)) {
        break;
    }else if (precio === 0) {
        break;
    }else {
        precioFinal = precioFinal + precio;
}
}


//Algoritmo condicional

if(precioFinal) {
    alert("El precio final es: $" + precioFinal);
    let medioDePago = mediosDePago();
    alert(medioDePago);
    }else {
    alert("Ups! No se ha podido realizar la compra ya que no hay ningun producto en el carrito")
}


function mediosDePago () {    
        let medioDePago = prompt("Desea pagar con: Mercado Pago, Tarjeta Debito, Tarjeta Credito").toLocaleLowerCase(); 
        if (medioDePago == "mercado pago") {
            return("Usted realizo el pago con Mercado Pago");
        }else if (medioDePago == "tarjeta credito") {
            return("Usted realizo el pago con Tarjeta de Credito");
        }else if (medioDePago == "tarjeta debito") {
            return("Usted realizo el pago con Tarjeta de Debito");
        }else {
            return("Medio de pago incorrecto");
        }
    }

