//COMPRUEBA SI LA CADENA ESTA VACIA
function isEmpty(cadena){
    return (cadena.length == 0 || cadena == ' ')?true : false;
}

//COMPRUEBA SI LA CADENA SUPERA LA CANTIDAD DE CARACTERES
function superaCaracteres(cadena, cantidad){
    return (cadena.length > cantidad);
}

//COMPRUEBA QUE SEA UN EMAIL
function esEmail(cadena){
        let regex = new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}');
        return regex.test(cadena);
}

//VERIFICA QUE EL NOMBRE NO ESTE VACIO, NI SUPERE LOS 5 CARACTERES
function verificarNombre(){
    let caracteres = 50;
    let nombreVacio = 'El nombre no puede estar vacío';
    let nombreMax = 'El nombre superó los' + caracteres + 'caracteres';

    let nombre = document.getElementById('contacto__nombre').value;

    if(isEmpty(nombre)){
        document.getElementById('nombre__error').innerHTML = nombreVacio;
    }else if(superaCaracteres(nombre, caracteres)){
        document.getElementById('nombre__error').innerHTML = nombreMax;
    }
    else{
        document.getElementById('nombre__error').innerHTML = '';
    }
}

//VERIFICA QUE SEA UN EMAIL Y QUE NO ESTE VACIOSINO MUESTRA UN ERROR
function verificarEmail(){
    let errorEmail = 'Se debe ingresar un email';
    let emailVacio = 'El email no puede estar vacío';

    let email = document.getElementById('contacto__email').value;

    if(isEmpty(email)){
        document.getElementById('email__error').innerHTML = emailVacio;
    }
    else if(!esEmail(email)){
        document.getElementById('email__error').innerHTML = errorEmail;
    }
    else{
        document.getElementById('email__error').innerHTML = '';
    }
}

//VERIFICA QUE EL ASUNTO NO ESTE VACIO NI SUPERE LOS CARCTERES
function verificarAsunto(){
    let caracteres = 50;
    let asuntoVacio = 'El asunto no puede estar vacío';
    let asuntoMax = 'El asunto no puede superar los '+ caracteres + ' caracteres';

    let asunto = document.getElementById('contacto__asunto').value;

    if (isEmpty(asunto)){
        document.getElementById('asunto__error').innerHTML = asuntoVacio;
    }
    else if(superaCaracteres(asunto, caracteres)){
        document.getElementById('asunto__error').innerHTML = asuntoMax;
    }
    else{
        document.getElementById('asunto__error').innerHTML = '';
    }
}

//VERIFICA QUE EL MENSAJE NO ESTE VACIO NI SUPERO LOS CARACTERES
function verificarMensaje(){
    let caracteres = 300;
    let mensajeVacio = 'El mensaje no puede estar vacío';
    let mensajeMax = 'El mensaje no puede superar los ' + caracteres + ' caracteres';

    let mensaje = document.getElementById('contacto__mensaje').value;

    if (isEmpty(mensaje)){
        document.getElementById('mensaje__error').innerHTML = mensajeVacio;
    }
    else if (superaCaracteres(mensaje, caracteres)){
        document.getElementById('mensaje__error').innerHTML = mensajeMax;
    } 
    else{
        document.getElementById('mensaje__error').innerHTML = '';
    }
    
}


//LLAMA A TODAS LAS FUNCIONES DE VERIFICACION
function verificar(){
    verificarNombre();
    verificarEmail();
    verificarAsunto();
    verificarMensaje();
}