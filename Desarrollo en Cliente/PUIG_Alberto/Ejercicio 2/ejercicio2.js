addEventListener("DOMContentLoaded", () => {
    document.getElementById("boton1").addEventListener("click", (event) => {
        event.preventDefault()

        validarDatosHabilitarBanco()
    })

    document.getElementById("boton2").addEventListener("click", (event) => {
        validarDatosEnviarDatos(event)
    })
})

function validarDatosHabilitarBanco(){
    let nombre = document.getElementById("nombre").value
    let apellidos = document.getElementById("apellidos").value
    let email = document.getElementById("correo").value
    let usuario = document.getElementById("usuario").value
    let dni = document.getElementById("dni").value

    let todosValidados = true

    if(/([0-9])/.test(nombre) || nombre.length < 2){
        console.log("Debe rellenar el campo nombre con al menos 2 caracteres de la 'a' a la 'z' independientemente de si son mayúsculas o minúsculas")
        todosValidados = false
    }
    if(/([0-9])/.test(apellidos) || apellidos.length < 2){
        console.log("Debe rellenar el campo apellidos con al menos 2 caracteres de la 'a' a la 'z' independientemente de si son mayúsculas o minúsculas")
        todosValidados = false
    }
    if(!email.includes("@")){
        console.log("Debe rellenar el campo email con almenos una @")
        todosValidados = false
    }
    if(usuario.length < 5 || usuario.length > 8){
        console.log("Debe rellenar el campo usuario con entre 5 y 8 caracteres")
        todosValidados = false
    }

    {
        let abcedario = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

        let numeroDNI = Number.parseInt(String(dni).slice(0, -1))
        let letraDNI = String(dni).charAt(dni.length - 1)

        if(Number.isNaN(numeroDNI) || numeroDNI < 0 || numeroDNI > 99999999){
            console.log("El DNI introducido no es correcto, el número no puede ser negativo ni exceder 99.999.999")
            todosValidados = false
        } else {
            if(letraDNI.length == 0 || letraDNI.length > 1){
                console.log("Debes indicar la letra del DNI y no puede ser más de un carácter")
                todosValidados = false
            } else {
                let letraCorrectaDNI = abcedario[numeroDNI % abcedario.length]

                if(letraDNI == letraCorrectaDNI){
                    
                } else {
                    console.log("La letra del DNI no es correspondiente al número introducido")
                    todosValidados = false
                }
            }
        }
    }

    if(todosValidados){
        document.getElementById("boton2").disabled = ""
    } else {
        console.log("#".repeat(20))
        document.getElementById("boton2").disabled = "disabled"
    }
}

function validarDatosEnviarDatos(event){
    let iban = document.getElementById("iban").value
    let ccc = document.getElementById("ccc").value
    let pass = document.getElementById("pass").value

    let todosValidados = true

    if(!/^ES[0-9]{2}$/.test(iban)){
        console.log("Debe introducir en elcampo iban las letras 'ES' y 2 números")
        todosValidados = false
    }
    if(!/^[0-9]{20}$/.test(ccc)){
        console.log("Debe introducir en el campo ccc 20 numeros")
        todosValidados = false
    }
    if(pass.trim() == ""){
        console.log("Debe introducir una contraseña en el campo contraseña")
        todosValidados = false
    }

    if(!todosValidados){
        console.log("#".repeat(20))
        event.preventDefault()
    }
}

function validarDatos(){
    
}

function valida(form){

}

function datosBancarios(){
}