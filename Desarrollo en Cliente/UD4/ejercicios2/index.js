let a = (...argumentos) => {
    let numeroParametros = argumentos.length

    console.log("El número de parámetros pasados es:", numeroParametros)

    console.log("Los parámetros pasados son: ", argumentos)

    if(numeroParametros > 2){
        let temp = argumentos[0]
        argumentos[0] = argumentos[2]
        argumentos[2] = temp
        console.log("Los parámetros después de cambiarlos son: ", argumentos)
    }
}

a(1, 2, 3, 4, 5, 6, 7, 8)

const CONTRASENA = ""

let contrasenaValidada = false

let validar = () => {
    let contrasena = document.getElementById("contrasena").value;

    let sesion = document.getElementById("sesion")

    let requierenSesion = document.getElementsByClassName("requiere-sesion")

    if(contrasena == CONTRASENA){
        contrasenaValidada = true
        sesion.style.backgroundColor = "green"
        sesion.innerHTML = "<p>Sesión iniciada</p>"
        for(requiereSesion of requierenSesion){
            requiereSesion.disabled = false
        }
    } else {
        contrasenaValidada = false
        sesion.style.backgroundColor = "red"
        sesion.innerHTML = "<p>Contrasña incorrecta</p>"
        for(requiereSesion of requierenSesion){
            requiereSesion.disabled = true
        }
    }
}

let saldo = 10000

let consultar = () => {
    let htmlResultadOperacion = document.getElementById("resultadoOperacion")
    htmlResultadOperacion.innerHTML = "Tu saldo es de "+saldo+"€"
}

let sacar = () => {
    let cantidad = document.getElementById("montoSacar").value

    saldo = saldo - cantidad
    
    let htmlResultadOperacion = document.getElementById("resultadoOperacion")
    htmlResultadOperacion.innerHTML = "Tu saldo es de "+saldo+"€"

}