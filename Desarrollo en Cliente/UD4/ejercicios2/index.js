let a = (...argumentos) => {
    let numeroParametros = argumentos.length

    console.log("El número de parámetros pasados es:", numeroParametros)

    console.log("Los parámetros pasados son: ", argumentos)

    if(numeroParametros > 2){
        let temp = argumentos[0]
        argumentos[0] = argumentos[2]
        argumentos[2] = temp
        console.log("Los parámetros después de cambiarlos son: ", argumentos)
    }
}

a(1, 2, 3, 4, 5, 6, 7, 8)