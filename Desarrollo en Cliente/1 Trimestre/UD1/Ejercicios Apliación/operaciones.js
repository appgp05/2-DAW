// TABLA MULTIPLICAR 7
for(let i = 1; i <= 10; i++){
    let resultado = document.createElement("p")
    resultado.innerHTML = "7 * " + i + " = " + (7 * i)
    document.getElementById("resultadosTablaDel7").appendChild(resultado)
}

// TABLA SUMAR 8
let i = 1
while(i <= 10){
    let resultado = document.createElement("p")
    resultado.innerHTML = "8 + " + i + " = " + (8 + i)
    document.getElementById("resultadosTablaDel8").appendChild(resultado)
    ++i;
}

// TABLA DIVIDIR 9
i = 1
do{
    let resultado = document.createElement("p")
    resultado.innerHTML = "9 / " + i + " = " + (9 / i)
    document.getElementById("resultadosTablaDel9").appendChild(resultado)
    ++i;
} while(i <= 10)

let numero1
let numero2
let resultado

// 125 / 8 Con desplazamiento de bits
numero1 = 125
numero2 = 8
resultado = numero1 >> Math.log2(numero2)
console.log(resultado)

// 40 x 4 Con desplazamiento de bits
numero1 = 40
numero2 = 4
resultado = numero1 << Math.log2(numero2)
console.log(resultado)

// 25 / 2 Con desplazamiento de bits
numero1 = 25
numero2 = 2
resultado = numero1 >> Math.log2(numero2)
console.log(resultado)

// 10 x 16 Con desplazamiento de bits
numero1 = 10
numero2 = 16
resultado = numero1 << Math.log2(numero2)
console.log(resultado)