export {CentroComercial}

class CentroComercial{
    nombre
    direccion
    plantas = []

    constructor(
        nombre,
        direccion,
    ){
        this.nombre = nombre
        this.direccion = new Direccion(direccion.calle, direccion.numero, direccion.codigoPostal)
        
        console.log("Construido nuevo centro comercial: "+nombre+", Calle: "+direccion.calle+", nº:"+direccion.numero+", CP: "+direccion.codigoPostal)    
    }

    modificarNombre = (nombre) => {
        this.nombre = nombre
    }

    modificarDireccion = ({calle, numero, codigoPostal}) => {
        let direccionNueva = new Direccion(calle, numero, codigoPostal)
        this.direccion = direccionNueva
    }

    agregarPlantasYLocales = (numPlantas, numLocales) => {
        for(let i = 0; i < numPlantas; i++){
            let planta = []

            for(let e = 0; e < numLocales; e++){
                planta.push(new Tienda("", i + 1, e + 1))
            }

            this.plantas.push(planta)
        }
    }

    asignarTiendas = (...tiendas) => {
        for(let tienda of tiendas){
            let tiendaNueva = new Tienda(tienda.nombre, tienda.planta,tienda.local)

            this.plantas[tienda.planta - 1][tienda.local - 1] = tiendaNueva

            console.log(tienda.nombre + " es ahora la tienda del local " + tienda.local + " en planta " + tienda.planta)
        }
    }

    imprimeLocales = () => {
        console.log("Listado de tiendas del centro comercial " + this.nombre)

        for(let planta of this.plantas){
            for(let local of planta){
                console.log("Tienda del local " + local.local + " de la planta " + local.planta + ": " + local.nombre)
            }
        }
    }
}

function Direccion(calle, numero, codigoPostal){
    this.calle = calle
    this.numero = numero
    this.codigoPostal = codigoPostal
}

function Tienda(nombre, planta, local){
    this.nombre = nombre
    this.planta = planta
    this.local = local
}