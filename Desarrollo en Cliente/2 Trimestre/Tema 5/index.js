function mostrarEnConsola(texto){
    console.log(texto)
}

addEventListener("load", () => {
    document.getElementById("botonConManejadorSemántico").onclick = () => mostrarEnConsola("Con manejador semántico")
    document.getElementById("botonConAddEventListener").addEventListener("click", () => {
        mostrarEnConsola("Con AddEventListener")
    })
    document.getElementById("botonConSetAtribute").setAttribute("onclick", "mostrarEnConsola('Con SetAtribute')")
})