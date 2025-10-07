function procesarFormulario(){
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value

    document.getElementById("resultados").innerHTML = "";

    switch (true) {
        case (numero1 > numero2):
            document.getElementById("resultados").innerHTML += "<p>El número mayor es el " + numero1 + "</p>";
            break;
        case (numero1 == numero2):
            document.getElementById("resultados").innerHTML += "<p>Los dos números son iguales</p>";
            break;
        case (numero1 < numero2):
            document.getElementById("resultados").innerHTML += "<p>El número mayor es el " + numero2 + "</p>";
            break;
    }

    if(numero1 > 0){
        document.getElementById("resultados").innerHTML += "<p>El número " + numero1 + " es positivo</p>";
    } else {
        document.getElementById("resultados").innerHTML += "<p>El número " + numero1 + " no es positivo</p>";
    }

    if(numero2 > 0){
        document.getElementById("resultados").innerHTML += "<p>El número " + numero2 + " es positivo</p>";
    } else {
        document.getElementById("resultados").innerHTML += "<p>El número " + numero2 + " no es positivo</p>";
    }
}