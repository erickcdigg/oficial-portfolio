
let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades() {
    var skills = document.querySelector("#skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 0) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("php");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("jquery");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("coreldraw");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
    }
}


window.onscroll = function () {
    efectoHabilidades();
}

//********************************************* variables globales ************************************************

var submitBtn = document.querySelector('#limpiar');

document.addEventListener('DOMContentLoaded', function () {

    //Boton  bloqueado
    submitBtn.style.backgroundColor = 'gray';
    submitBtn.style.color = 'black';
    submitBtn.disabled = true;

    //Esconder mensajes
    //document.querySelector('#mensajeNombre').style.display = "none";
    document.querySelector('#mensajeApellido');
    document.querySelector('#mensajePhone');
    document.querySelector('#mensajeEmail');
    document.querySelector('#mensajeAsunto');
    document.querySelector('#mensajeComents');

    // inputs desbloqueados
    document.querySelector("#txtNombre").disabled = false;
    document.querySelector("#txtApellido").disabled = false;
    document.querySelector("#txtPhone").disabled = false;
    document.querySelector("#txtEmail").disabled = false;
    document.querySelector("#txtAsunto").disabled = false;
    document.querySelector("#txtArea").disabled = false;



    // boton de descarga
    document.getElementById("descarga").addEventListener('click', function () {
        var pdfUrl = "./pdffiles/erikc-antony-loza-tavera-cv.pdf";
        var aElement = document.createElement("a");

        aElement.href = pdfUrl;
        aElement.download = "cv-Erikc.pdf";

        document.body.appendChild(aElement);
        aElement.click();
        //document.body.remove(aElement);
    });

});



function bloquearInputs() {
    document.querySelector("#txtNombre").disabled = true;
    document.querySelector("#txtApellido").disabled = true;
    document.querySelector("#txtPhone").disabled = true;
    document.querySelector("#txtEmail").disabled = true;
    document.querySelector("#txtAsunto").disabled = true;
    document.querySelector("#txtArea").disabled = true;
}

function cambiarColorInputs() {
    document.querySelector("#txtNombre").style.backgroundColor = 'gray';
    document.querySelector("#txtNombre").style.color = 'black';

    document.querySelector("#txtApellido").style.backgroundColor = 'gray';
    document.querySelector("#txtApellido").style.color = 'black';

    document.querySelector("#txtPhone").style.backgroundColor = 'gray';
    document.querySelector("#txtPhone").style.color = 'black';

    document.querySelector("#txtEmail").style.backgroundColor = 'gray';
    document.querySelector("#txtEmail").style.color = 'black';

    document.querySelector("#txtAsunto").style.backgroundColor = 'gray';
    document.querySelector("#txtAsunto").style.color = 'black';

    document.querySelector("#txtArea").style.backgroundColor = 'gray';
    document.querySelector("#txtArea").style.color = 'black';
}


function validarInput(elemento, numero) {

    var msjNombre = document.querySelector('#mensajeNombre');
    var msjApellido = document.querySelector('#mensajeApellido');
    var msjPhone = document.querySelector('#mensajePhone');
    var msjEmail = document.querySelector('#mensajeEmail');
    var msjAsunto = document.querySelector('#mensajeAsunto');
    var msjMensaje = document.querySelector('#mensajeComents');
    ///var textoMensaje;


    switch (numero) {
        case 1:
            msjNombre.textContent = elemento.value.trim() === '' ? 'El campo del NOMBRE está vacío.' : 'El campo está lleno.';

            if (elemento.value.trim() === '') {
                msjNombre.style.color = 'red';
                return false;
            } else {
                msjNombre.style.color = 'lime';
                return true;
            }

            break;
        case 2:
            msjApellido.textContent = elemento.value.trim() === '' ? 'El campo del APELLIDO está vacío.' : 'El campo está lleno.';

            if (elemento.value.trim() === '') {
                msjApellido.style.color = 'red';
                return false;
            } else {
                msjApellido.style.color = 'lime';
                return true;
            }

            break;
        case 3:
            msjPhone.textContent = elemento.value.trim() === '' ? 'El campo del CELULAR está vacío.' : 'El campo está lleno.';

            if (elemento.value.trim() === '') {
                msjPhone.style.color = 'red';
                return false;
            } else {
                msjPhone.style.color = 'lime';
                return true;
            }

            break;
        case 4:
            msjEmail.textContent = elemento.value.trim() === '' ? 'El campo del CORREO está vacío.' : 'El campo está lleno.';

            if (elemento.value.trim() === '') {
                msjEmail.style.color = 'red';
                return false;
            } else {
                msjEmail.style.color = 'lime';
                return true;
            }

            break;
        case 5:
            msjAsunto.textContent = elemento.value.trim() === '' ? 'El campo del ASUNTO está vacío.' : 'El campo está lleno.';

            if (elemento.value.trim() === '') {
                msjAsunto.style.color = 'red';
                return false;
            } else {
                msjAsunto.style.color = 'lime';
                return true;
            }

            break;
        case 6:
            msjMensaje.textContent = elemento.value.trim() === '' ? 'El campo del MENSAJE está vacío.' : 'El campo está lleno.';

            if (elemento.value.trim() === '') {

                msjMensaje.style.color = 'red';
                return false;
            } else {
                msjMensaje.style.color = 'lime';
                return true;
            }

            break;
        default:
        //textoMensaje = '';
    }

    /*if (elemento.value.trim() === '') {
        mensaje.style.color = 'red';
        //mensaje.textContent = textoMensaje;
        return false;
    } else {
        mensaje.textContent = 'El campo está llenADo.';
        mensaje.style.color = 'green';
        return true;
    }*/
}


function validarFormulario() {
    var nombreValido = validarInput(document.querySelector('#txtNombre'), 1);
    var apellidoValido = validarInput(document.querySelector('#txtApellido'), 2);
    var phoneValido = validarInput(document.querySelector('#txtPhone'), 3);
    var emailValido = validarInput(document.querySelector('#txtEmail'), 4);
    var asuntoValido = validarInput(document.querySelector('#txtAsunto'), 5);
    var areaValido = validarInput(document.querySelector('#txtArea'), 6);


    if (nombreValido && apellidoValido && phoneValido && emailValido && asuntoValido && areaValido) {
        submitBtn.style.backgroundColor = '';
        submitBtn.style.color = '';
        submitBtn.disabled = false;
    }
}

/***/
document.querySelector('#txtNombre').addEventListener('blur', validarFormulario);
document.querySelector('#txtApellido').addEventListener('blur', validarFormulario);
document.querySelector('#txtPhone').addEventListener('blur', validarFormulario);
document.querySelector('#txtEmail').addEventListener('blur', validarFormulario);
document.querySelector('#txtAsunto').addEventListener('blur', validarFormulario);
document.querySelector('#txtArea').addEventListener('blur', validarFormulario);

//document.addEventListener('DOMContentLoaded', validarFormulario);


document.querySelector("#limpiar").addEventListener('click', function (e) {
    e.preventDefault();
    cambiarColorInputs();
    bloquearInputs();
    var submitBtnBlloqueado = document.querySelector('#limpiar');
    submitBtnBlloqueado.style.backgroundColor = "gray";
    submitBtnBlloqueado.disabled = "gray";

});



//Los campos obligatorios están marcados con un asterisco (*).

