function enviarFormulario(){
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    
    let multiplo

    if(Number.isInteger((numero1 / numero2)) && numero1 > numero2){
        multiplo = "Sí es multiplo"
    } else {
        multiplo = "No es multiplo"
    }

    document.getElementById("resultados").innerHTML = multiplo
}