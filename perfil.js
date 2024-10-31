//variable let de si es adm-asist-invit
let perfil = "AdmiNistrador";

// Uso toLowerCase() para que todo el String de Perfil se pase a minuscula y poder igualar con solo minuscula
if(perfil.toLowerCase() == "administrador") {
    console.log("Usted tiene todos los privilegios");
}else if(perfil.toLowerCase() == "asistente"){
    console.log("Usted sólo tiene permisos de registrar,modificar y consultar datos");
}else if(perfil.toLowerCase() == "invitado"){
    console.log("Usted sólo tiene permisos de consultar datos");
}else{
    console.log("Debe especificar un perfil válido");
}
