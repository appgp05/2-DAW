addEventListener("DOMContentLoaded", () => {
    let botonEnviar = document.getElementById("enviar")
    let intentos = document.getElementById("intentos")
    let errores = document.getElementById("errores")

    let nombre = document.getElementById("nombre")
    let apellidos = document.getElementById("apellidos")
    let edad = document.getElementById("edad")
    let nif = document.getElementById("nif")
    let email = document.getElementById("email")
    let provincia = document.getElementById("provincia")
    let fecha = document.getElementById("fecha")
    let telefono = document.getElementById("telefono")
    let hora = document.getElementById("hora")

    intentos.innerHTML = obtenerCookie("intentos")

    nombre.addEventListener("focusout", () => {
        nombre.value = nombre.value.toUpperCase()
    })

    apellidos.addEventListener("focusout", () => {
        apellidos.value = apellidos.value.toUpperCase()
    })

    botonEnviar.addEventListener("click", (event) => {
        guardarCookie("intentos", Number(obtenerCookie("intentos")) + 1)
        intentos.innerHTML = obtenerCookie("intentos")

        errores.innerHTML = ""

        if (nombre.value.length < 3) {
            errores.innerHTML += "<p>El campo nombre debe tener al menos 5 caracteres</p>"
            nombre.focus()
        }

        if (apellidos.value.length < 6) {
            errores.innerHTML += "<p>El campo apellidos debe tener al menos 6 caracteres</p>"
            apellidos.focus()
        }

        if (isNaN(Number(edad.value)) || Number(edad.value) < 0 || Number(edad.value) > 105) {
            errores.innerHTML += "<p>El campo edad debe ser un número y entra en el rango 0 - 105</p>"
            edad.focus()
        }

        if (!/^[0-9]{8}\-[A-Z]|[a-z]$/.test(nif.value)) {
            // Mi expresión regular contiene:
            // // Las dos barras para indicar cuándo empieza y acaba la expresión regular
            // ^ Indica que la expresión regular debe empezar por lo que siga en la propia expresión regular
            // [0-9]{8}: [0-9] Indica que puede haber números del 0 al 9 y {8} indica que debe haber 8
            // \- Indica que debe haber un guión, la contrabarra es porque el - es un caracter expecial en una expresión regular
            // [A-Z] Indica que debe haber una letra desde la A hasta la Z
            // | Indica que se debe cumplir o la primera opción, que es este caso es [A-Z] o la segunda opción, que en este caso es [a-z]
            // [a-z] Indica que debe haber una letra desde la a hasta la z
            // $ Indica que la expresión regular debe acabar por lo que se precede en la propia expresión regular

            errores.innerHTML += "<p>El campo nif debe contener 8 números, un guión y 1 letra</p>"
            nif.focus()
        }

        if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(email.value)) {
            // Mi expresión regular contiene:
            // // Las dos barras para indicar cuándo empieza y acaba la expresión regular
            // ^ Indica que la expresión regular debe empezar por lo que siga en la propia expresión regular
            // [a-zA-Z0-9]+: [a-zA-Z0-9] Indica que puede haber letras de la a a la z, letras de la A a la Z o numeros del 0 al 9 y el + indica que debe al menos 1 pero que puede haber más
            // @ Indica que debe haber un @
            // \. Indica que debe haber un punto, la contrabarra es porque el punto es un caracter expecial en una expresión regular
            // $ Indica que la expresión regular debe acabar por lo que se precede en la propia expresión regular

            errores.innerHTML += "<p>El campo email debe seguir el siguiente formato: direccion@dominio.ejemplo</p>"
            email.focus()
        }
        
        if(provincia.value == 0){
            errores.innerHTML += "<p>Debe seleccionar una provincia</p>"
            provincia.focus()
        }
        
        let diaDelMes = "((0?[1-9])|([1-2][0-9])|(3[0-1]))"
        let mesDelAno = "((0?[1-9])|(1[0-2]))"
        let ano = "[0-9]{4}"
        // ? Indica que lo que lo precede es opcional y no es necesario que aparezca
        // | Indica que se debe cumplir o lo que lo precede o lo que lo sucede
        // [x-y] Indica que debe contener un caracter desde el carecter x hasta el caracter y
        // {4} Indica que se debe repetir 4 veces la condición que lo precede
        let expresionRegularBarras = RegExp("^(" + diaDelMes + "\\/" + mesDelAno + "\\/" + ano + ")$")
        let expresionRegularGuiones = RegExp("^(" + diaDelMes + "\\-" + mesDelAno + "\\-" + ano + ")$")
        // ^ Indica que la expresión regular debe empezar por lo que siga en la propia expresión regular
        // $ Indica que la expresión regular debe acabar por lo que se precede en la propia expresión regular
        // \\- Indica que debe haber un guión y las \\ se requieren puesto que el guión en una expresión regular es un caracter especial y hay que escaparlo
        // \\/ Indica que debe haber una barra y las \\ se requieren puesto que la barra en una expresión regular es un caracter especial y hay que escaparla
        if(!expresionRegularBarras.test(fecha.value) && !expresionRegularGuiones.test(fecha.value)){
            errores.innerHTML += "<p>Debe indicar una fecha con el formato dd/mm/aaaa o dd-mm-aaaa</p>"
            fecha.focus()
        }
        
        if(!/^[0-9]{9}$/.test(telefono.value)){
            // Mi expresión regular contiene:
            // // Las dos barras para indicar cuándo empieza y acaba la expresión regular
            // ^ Indica que la expresión regular debe empezar por lo que siga en la propia expresión regular
            // [0-9]{9}: [0-9] Indica que puede haber numeros del 0 al 9 y {9} indica que debe haber 9
            // $ Indica que la expresión regular debe acabar por lo que se precede en la propia expresión regular
            
            errores.innerHTML += "<p>Debe indicar un telefono que contenga 9 dígitos</p>"
            telefono.focus()
        }
        
        if(!/^(([0-1]?[0-9])|(2[0-3])):([0-5]?[0-9])$/.test(hora.value)){
            // Mi expresión regular contiene:
            // // Las dos barras para indicar cuándo empieza y acaba la expresión regular
            // ^ Indica que la expresión regular debe empezar por lo que siga en la propia expresión regular
            // [x-y] Indica que debe contener un caracter desde el carecter x hasta el caracter y
            // ? Indica que lo que lo precede es opcional y no es necesario que aparezca
            // | Indica que se debe cumplir o lo que lo precede o lo que lo sucede
            // : Indica que debe haber :
            // $ Indica que la expresión regular debe acabar por lo que se precede en la propia expresión regular
            errores.innerHTML += "<p>Debe indicar una hora correcta con el formato hh:mm</p>"
            hora.focus()
        }

        if(errores.innerHTML == ""){
            if(!confirm("Seguro que quieres enviar el formulario?")){
                event.preventDefault()
            }
        } else {
            event.preventDefault()
        }
    })
})

function obtenerCookie(nombre) {
    let name = nombre + "=";
    let cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.indexOf(name) === 0) {
            return decodeURIComponent(cookie.substring(name.length));
        }
    }
    return null;
}

function guardarCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));

    document.cookie = nombre + "=" + encodeURIComponent(valor) + ";expires=" + fecha.toUTCString() + ";path=/";
}