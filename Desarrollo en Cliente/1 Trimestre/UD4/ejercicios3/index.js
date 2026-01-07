class Persona{
    constructor(
        nombre,
        apellido,
        edad,
        email
    ){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.email = email
    }
}

let construir = (...argumentos) => {
    let personas = []

    for(argumento of argumentos){
        personas.push(new Persona(...argumento))
    }
    return personas
}

let calcularMediaEdadPersonas = (personas) => {
    let resultado = 0

    for(let persona of personas){
        resultado += Number(persona.edad)
    }

    resultado = resultado/personas.length

    return resultado
}

let personas = construir(
    ["Roberto", "Martínez", "22", "roberto.martinez@tuempresa.com"],
    ["Antonio", "López", "25", "antonio.lopez@tuempresa.com"],
    ["Javier", "Rodríguez", "18", "javier.rodriguez@tuempresa.com"],
    ["Eva", "Teruel", "33", "eva.teruel@tuempresa.com"],
)

let edadMediaPersonas = calcularMediaEdadPersonas(personas)

// let persona1 = new Persona("Roberto", "Martínez", "22", "roberto.martinez@tuempresa.com")
// let persona2 = new Persona("Antonio", "López", "25", "antonio.lopez@tuempresa.com")
// let persona3 = new Persona("Javier", "Rodríguez", "18", "javier.rodriguez@tuempresa.com")
// let persona4 = new Persona("Eva", "Teruel", "33", "eva.teruel@tuempresa.com")
console.log("Personas creadas: ", ...personas)
console.log("La edad media de las personas es: ", edadMediaPersonas)