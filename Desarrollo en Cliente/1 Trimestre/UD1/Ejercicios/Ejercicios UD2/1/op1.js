function enviarFormulario () {
    let nombre = document.getElementById("nombre").value
    let apellido1 = document.getElementById("apellido1").value
    let apellido2 = document.getElementById("apellido2").value
    let fullName = nombre + " " + apellido1
    let fechaNacimiento = document.getElementById("edad").value
    fechaNacimiento = new Date(fechaNacimiento)
    diaNacimiento = fechaNacimiento.getUTCDate()
    mesNacimiento = fechaNacimiento.getUTCMonth()
    anoNacimiento = fechaNacimiento.getFullYear()

    let edad

    edad = new Date().getFullYear() - anoNacimiento
    
    if(mesNacimiento >= new Date().getUTCMonth()){
        if(mesNacimiento == new Date().getUTCMonth()){
            if(diaNacimiento > new Date().getUTCDate()){
                edad--
            }
        } else {
            edad--
        }
    }

    console.log("Edad: " + edad)
    console.log(diaNacimiento, mesNacimiento, anoNacimiento)
    document.getElementById("resultados").value = fullName + "\n" + edad
}