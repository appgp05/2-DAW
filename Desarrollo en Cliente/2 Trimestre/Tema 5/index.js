function mostrarEnConsola(texto){
    console.log(texto)
}

addEventListener("DOMContentLoaded", () => {
    document.getElementById("botonConManejadorSemántico").onclick = () => mostrarEnConsola("Con manejador semántico")
    document.getElementById("botonConAddEventListener").addEventListener("click", () => {
        mostrarEnConsola("Con AddEventListener")
    })
    document.getElementById("botonConSetAtribute").setAttribute("onclick", "mostrarEnConsola('Con SetAtribute')")
})

// PRUEBAS CLASE

addEventListener("DOMContentLoaded", () => {
    let div = document.getElementById("padre")
    let boton = document.getElementById("hijo")

    div.addEventListener("click", () => {
        console.log("padre")
    })

    boton.addEventListener("click", () => {
        console.log("hijo")
    })
})