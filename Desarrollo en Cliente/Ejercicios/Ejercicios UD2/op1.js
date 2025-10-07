function enviarFormularioEj1 () {
    let nombre = document.getElementById("ej1Nombre").value
    let apellido1 = document.getElementById("ej1Apellido1").value
    let apellido2 = document.getElementById("ej1Apellido2").value
    let fullName = nombre + " " + apellido1
    let fechaNacimiento = document.getElementById("ej1Edad").value
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
    document.getElementById("resultadosEj1").value = fullName + "\n" + edad
}

function enviarFormularioEj2(){
    let numero = Number.parseInt(document.getElementById("ej2Numero").value)
    let numeroExponencial = Math.exp(numero)
    console.log()
    document.getElementById("resultadosEj2").innerHTML = numeroExponencial   
}

function enviarFormularioEj3(){
    let numero = Number.parseInt(document.getElementById("ej3Numero").value)
    
    let par
    
    if(numero % 2 == 0){
        par = "Sí"
    } else {
        par = "No"
    }

    document.getElementById("resultadosEj3").innerHTML = par
}

function enviarFormularioEj4(){
    let numero1 = Number.parseInt(document.getElementById("ej4Numero1").value)
    let numero2 = Number.parseInt(document.getElementById("ej4Numero2").value)
    
    let multiplo

    if(Number.isInteger((numero1 / numero2)) && numero1 > numero2){
        multiplo = "Sí es multiplo"
    } else {
        multiplo = "No es multiplo"
    }

    document.getElementById("resultadosEj4").innerHTML = multiplo
}

let ej5MesesDelAno = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

ej5MesesDelAno.forEach(mes => {
    (
        document.getElementById("resultadosEj5").innerHTML += "<p>"+mes+"</p>"
    )
});

function enviarFormularioEj6(){
    let numero1 = document.getElementById("ej6Numero1").value
    let numero2 = document.getElementById("ej6Numero2").value

    document.getElementById("resultadosEj6").innerHTML = "";

    switch (true) {
        case (numero1 > numero2):
            document.getElementById("resultadosEj6").innerHTML += "<p>El número mayor es el " + numero1 + "</p>";
            break;
        case (numero1 == numero2):
            document.getElementById("resultadosEj6").innerHTML += "<p>Los dos números son iguales</p>";
            break;
        case (numero1 < numero2):
            document.getElementById("resultadosEj6").innerHTML += "<p>El número mayor es el " + numero2 + "</p>";
            break;
    }

    if(numero1 > 0){
        document.getElementById("resultadosEj6").innerHTML += "<p>El número " + numero1 + " es positivo</p>";
    } else {
        document.getElementById("resultadosEj6").innerHTML += "<p>El número " + numero1 + " no es positivo</p>";
    }

    if(numero2 > 0){
        document.getElementById("resultadosEj6").innerHTML += "<p>El número " + numero2 + " es positivo</p>";
    } else {
        document.getElementById("resultadosEj6").innerHTML += "<p>El número " + numero2 + " no es positivo</p>";
    }
}

for(let i = 0; i < 30; i++){
    document.getElementById("resultadosEj7").innerHTML += "<p>" + i + "</p>";
}

function enviarFormularioEj8(){
    let numero = document.getElementById("ej8Numero").value
    let resultado = 0;

    if(numero == 0){
        resultado = 0;
    } else {
        resultado = 1;
        for(let i = 1; i <= numero; i++){
            resultado = resultado * i;
        }
    }

    document.getElementById("resultadosEj8").innerHTML = resultado;
}