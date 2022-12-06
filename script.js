function presentarMensaje() {
    // A continuacion vamos a saludar
    var nombre = prompt("¿cómo te llamas?")
    var hora = 18
    var saludo = "Hola"

    if (hora < 12) {
        saludo = "Buenos días "
    }
    else if (hora >= 12 && hora < 18) {
        saludo = "Buenas tardes "
    }
    else {
        saludo = "Buenas noches "
    }
    alert(saludo + nombre + ", bienvenido a mi sitio :)")
}