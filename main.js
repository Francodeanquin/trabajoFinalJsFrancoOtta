//Servicio de cadeteria
class Servicio {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
class Cliente {
    constructor(nombre, telefono, email) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }
}

const opciones = [
    { nombre: "hasta 2 km", precio: 250 },
    { nombre: "Entre 2 y 4km", precio: 450 },
    { nombre: "Entre 4 y 6km", precio: 680 },
    { nombre: "Entre 6 y 8km", precio: 750 },
    { nombre: "Entre 8 y 10km", precio: 1000 }
];


alert("Bienvenido al servicio de cadeteria");

const carrito = [];
let precioTotal = ""
let eleccion = "";


while (eleccion !== "salir") {
    eleccion = prompt(
        "A que distancia se encuentra el punto de entrega?: \n" + opciones.map((servicio, index) => index + 1 + ")" + servicio.nombre).join("\n") + "\n (Escriba el número de la opción elegida o escriba 'salir' para salir)"
    );

    if (eleccion >= 1 && eleccion <= opciones.length) {
        const servicioSeleccionado = opciones[eleccion - 1];
        carrito.push(servicioSeleccionado);

        alert(servicioSeleccionado.nombre + " $ " + servicioSeleccionado.precio + ". Se agrego al carrito");

        eleccion = prompt("¿Desea elegir otro servicio? \n (si/no)").toLowerCase();

        while (eleccion !== "si" && eleccion !== "no") {
            alert("Por favor ingrese 'si' para continuar o 'no' para finalizar ");
            eleccion = prompt("¿Desea elegir otro servicio? \n (si/no)").toLowerCase();
        }


        if (eleccion === "no") {
            eleccion = "salir";
            precioTotal = carrito.reduce((acumulador, servicioSeleccionado) => acumulador + servicioSeleccionado.precio, 0);
            alert("Servicios elegidos:\n" + carrito.map((servicio, index) => index + 1 + ") " + servicio.nombre + " $" + servicio.precio).join("\n") + "\n" + "Total a pagar $" + precioTotal);
            
            const nombre = prompt("Por favor, ingrese su nombre");
            const telefono = prompt("Por favor, ingrese su numero de celular");
            const email = prompt("Por favor, ingrese su Email");
            const cliente1 = new Cliente(nombre, telefono, email);

            alert(cliente1.nombre + ", nos pondremos en contacto con vos al número " + cliente1.telefono + " te enviaremos tambien un mail a " +cliente1.email + ", muchas gracias" 
            );

        }
    }
}

