console.log(/^\d{8}$/)
function enviarFormularioEj2(){
    let abcedario = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

    // let abcedario = "TRWAGMYFPDXBNJZSQVHLCKE".split('')

    let numeroDNI = Number.parseInt(document.getElementById("ej1NumeroDNI").value)
    let letraDNI = document.getElementById("ej1LetraDNI").value

    let mensaje = ""

    if(Number.isNaN(numeroDNI) || numeroDNI < 0 || numeroDNI > 99999999){
        mensaje = "El DNI introducido no es correcto, el número no puede ser negativo ni exceder 99.999.999"
    } else {
        if(letraDNI.length == 0 || letraDNI.length > 1){
            mensaje = "Debes indicar la letra del DNI y no puede ser más de un carácter"
        } else {
            let letraCorrectaDNI = abcedario[numeroDNI % abcedario.length]

            if(letraDNI == letraCorrectaDNI){
                mensaje = "El DNI introducido es correcto"
            } else {
                mensaje = "La letra del DNI no es correspondiente al número introducido"
            }
        }
    }
    document.getElementById("resultadosEj2").innerHTML = mensaje
}