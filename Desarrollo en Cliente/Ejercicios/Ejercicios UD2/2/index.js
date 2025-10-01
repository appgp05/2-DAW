function enviarFormulario(){
    let numero = document.getElementById("numero").value
    let numeroExponencial = Math.exp(numero)
    console.log()
    document.getElementById("resultados").innerHTML = numeroExponencial   
}