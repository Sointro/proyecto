const valor = 200;

let estudiante = 0.8;
let trainee = 0.5;
let junior = 0.15;


let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let cantidad = document.getElementById("cantidad");
let seleccion = document.getElementById("seleccion");
let importe_total = document.getElementById("importe_total");  

//Funcion flecha para validar la forma correcta de direecion de correo.

const correoValido = correo => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

// Funcion para borrar el importe total a pagar

function BorrarForm() {
   importe_total.innerHTML  = "";
}

// Funcion para validar cada uno de los campor del formulario y registrar la operacion de compra.

function TotalAPagar() {
//validadcion campos del formuario.
    if(nombre.value === "") {
        alert("Por favor ingrese su nombre");
        return;
    }

    if(apellido.value === "") {
       alert("Por favor ingrese su apellido");
        return;
    }

    if(correo.value === "") {
        alert("Por favor ingrese una dirección de correo");
        return;
    }

    if(!correoValido(correo.value)) {
        alert("Por favor ingresa una direccion de  correo valido");
        return;
    }

    if((cantidad.value == 0) || (isNaN(cantidad.value))) {
        alert("Por favor ingrese una cantidad");
        return;
    }

    if(seleccion.value == "") {
        alert("Por favor debe seleccionar una opcion");
        return;
    }

    // Condicional para registrar la compra de tickets.
    let importe = (cantidad.value) * valor;

    if (seleccion.value == 0){
        importe = importe;
        importe_total.innerHTML =  importe;
        return;
    }
    else {if(seleccion.value == 1){
            importe = importe - (importe * estudiante);
            importe_total.innerHTML =  importe;
            return;
    }
    else {if(seleccion.value == 2){
            importe = importe - (importe * trainee);
            importe_total.innerHTML =  importe;
            return;
    }
    else {if(seleccion.value == 3){
            importe = importe - (importe * junior);
            importe_total.innerHTML =  importe;
            return;
    }
    }
    }
    }
 }
// Boton para ejecutar la funcion de validar formulario  y registrar compra y
// boton para ejecutar la funcion de borrar importe de la operacion.

 btnResumen.addEventListener("click", TotalAPagar);
 btnBorrar.addEventListener("click", BorrarForm);