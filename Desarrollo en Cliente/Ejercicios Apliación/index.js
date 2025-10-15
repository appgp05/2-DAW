// Ejercicio 1
function enviarFormularioEj1(){
    let notaProyecto = parseFloat(document.getElementById("ej1Numero1").value)
    let notaExamen = parseFloat(document.getElementById("ej1Numero2").value)

    console.log(notaProyecto, notaExamen)

    if(Number.isNaN(notaProyecto) || Number.isNaN(notaExamen) ||notaProyecto < 0 || notaProyecto > 10 || notaExamen < 0 || notaExamen > 10){
        alert("Notas invalidas, las notas deben de ser un número del 0 al 10")
    } else {
        let mediaResultante = (notaProyecto + notaExamen) / 2
        let calificacion

        console.log(mediaResultante)

        if(notaProyecto < 4.5 || notaExamen < 4.5 ){
            calificacion = "Suspenso"
        } else {
            switch (true) {
                case (mediaResultante < 5):
                    calificacion = "Suspenso"
                    break
                case (mediaResultante < 7):
                    calificacion = "Aprobado"
                    break
                case (mediaResultante < 9):
                    calificacion = "Notable"
                    break
                default:
                    calificacion = "Sobresaliente"
                    break
            }
        }
        alert("Tu calificación es: " + calificacion)
    }
}