function enviarFormulario(){
    let numero = document.getElementById("numero").value
    let resultado = 0;

    if(numero == 0){
        resultado = 0;
    } else {
        resultado = 1;
        for(let i = 1; i <= numero; i++){
            resultado = resultado * i;
        }
    }

    document.getElementById("resultados").innerHTML = resultado;
}