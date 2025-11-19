onload = () => {
    // comprobarMatricula(1, 2, 3, 4, 5, "P")
    // comprobarTelefono(7, 0, 0, 8, -10)

    comprobarMatriculas("12445P", "22445S")
    comprobarTelefonos(890456789, 723456789)
}

function comprobarMatricula(){
    let error = false

    if(arguments.length != 6){
        console.log("Se deben introducir 6 arguemtnos, 5 números y 1 letra")
        error = true
    }

    if(arguments[0] % 2 == 0){
        console.log("El primer número debe ser impar")
        error = true
    }

    for(let i = 0; i <= 4; ++i){
        if(isNaN(Number(arguments[i]))){
            console.log("Los 5 primeros argumentos deben ser letras")
            error = true
        }
    }

    // if(arguments[5] != 'P' && arguments[5] != 'S'){
    //     console.log("El 6º argumetno debe ser una P o una S")
    //     error = true
    // }

    if(!["P", "S"].includes(arguments[5])){
        console.log("El 6º argumetno debe ser una P o una S")
        error = true
    }

    if(error){
        return
    } else {
        console.log("Matricula correcta")
    }
}

function comprobarMatriculas(){
    for(argument of arguments){
        if(/^[13579][1-9]{4}[PS]/.test(argument)){
            console.log("La matricula " + argument +" es correcta.")
        } else {
            console.log("La matricula " + argument +" es incorrecta.")
        }
    }
}

function comprobarTelefono(){
    let error = false

    if(arguments[0] != 8 && arguments[0] != 9){
        console.log("El primer argumento debe der un 8 o un 9")
        error = true
    }

    if(arguments.length != 9){
        console.log("Se deben introducir 9 argumentos, 9 números")
    }

    for(let argument of arguments){
        console.log(argument)
        if(argument < 0){
            console.log("Ningún número puede ser negativo")
            break
        }
    }

    if(arguments[2] == 0 && arguments[1] == 0){
        console.log("El segundo y tercer número no pueden ser 0 al mismo tiempo")
    }
}

function comprobarTelefonos(){
    for(let argument of arguments){
        if(/^[89](([1-9]{2})|(0[1-9])|([1-9]0))[0-9]{6}$/.test(argument)){
            console.log("El número de teléfono " + argument + " es correcto.")
        } else {
            console.log("El número de teléfono " + argument + " es incorrecto.")
        }
    }
}