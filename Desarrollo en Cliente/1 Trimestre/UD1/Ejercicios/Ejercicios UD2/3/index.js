function enviarFormulario(){
    let numero = document.getElementById("numero").value
    
    let par
    
    if(numero % 2 == 0){
        par = "Sí"
    } else {
        par = "No"
    }

    document.getElementById("resultados").innerHTML = par
}