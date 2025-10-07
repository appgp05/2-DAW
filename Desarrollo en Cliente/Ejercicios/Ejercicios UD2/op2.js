// EJERCICIO 1
// let mensaje = `Hola a todo el Mundo!
// Qué fácil es incluir 'comillas simples'
// y "comillas dobles"`

// alert(mensaje)

// EJERCICIO 2
function enviarFormularioEj2(){
    let ej2Numero1 = document.getElementById("ej2Numero1").value
    let ej2Numero2 = document.getElementById("ej2Numero2").value

    let ej2Resultado = ej2Numero1 >> Math.sqrt(ej2Numero2)

    document.getElementById("resultadosEj2").innerHTML = ej2Resultado
}

// EJERCICIO 3
function enviarFormularioEj3(){
    let ej3Numero1 = document.getElementById("ej3Numero1").value
    let ej3Numero2 = document.getElementById("ej3Numero2").value

    let ej3Resultado = ej3Numero1 << Math.sqrt(ej3Numero2)

    document.getElementById("resultadosEj3").innerHTML = ej3Resultado
}

// EJERCICIO 4
console.log("El número más cercano al 0 es " + Number.MIN_VALUE)
console.log("El número más alto posible es " + Number.MAX_VALUE)
console.log("un valor infinito es " + Infinity)

// EJERCICIO 5
let OVNI = "OBJETO VOLADOR NO IDENTIFICADO"
let Info = "En un lugar de la mancha"

comprobarMinusculasYMayusculas(OVNI)
comprobarMinusculasYMayusculas(Info)

function comprobarMinusculasYMayusculas(texto){
    if(texto === texto.toUpperCase()){
        console.log("Tiene mayúsculas")
    } else {
        if(texto === texto.toLowerCase()){
            console.log("Tiene minúsculas")
        } else {
            console.log("Tiene minúsculas y mayúsculas")
        }
    }
}