
let palabraIngresada = "GatO"


switch(palabraIngresada.toLowerCase()){
    case "perro":
        console.log("Su traducciones es Dog")
        break;
    case "puerta":
        console.log("Su traducciones es Door");
        break;
    case "gato":
        console.log("Su traducciones es Cat");
        break;
    case "ventana":
        console.log("Su traducciones es Window");
        break;
    case "mesa":
        console.log("Su traducciones es Table");
        break;
    default:
        console.log("Ingrese unicamente las siguientes palabras: Perro , Puerta , Gato , Ventana, Mesa");
}

