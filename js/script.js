
//eventos de los Inputs y textarea
const datos ={
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//evento de submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //validar formulario
    const {nombre, email, mensaje} = datos;
    
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);

        return;
    }
    //crear la alerta que se envio correctamente
        mostrarAlerta('Mensaje enviado correctamente');
});

function leerTexto(evento){
     datos[evento.target.id] = evento.target.value;
 }

 function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if (error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);


    setTimeout(() => {
        alerta.remove();
    },5000);
 }

