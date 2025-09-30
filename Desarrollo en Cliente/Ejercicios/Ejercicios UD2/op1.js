function enviarFormulario () {
    let nombre = document.getElementById("nombre").value
    let apellido1 = document.getElementById("apellido1").value
    let apellido2 = document.getElementById("apellido2").value
    let fullName = nombre + " " + apellido1
    let edad = document.getElementById("edad").value
    let anoNacimiento = new Date().getFullYear() - edad
    document.getElementById("resultados").value = fullName + "\n" + anoNacimiento
}