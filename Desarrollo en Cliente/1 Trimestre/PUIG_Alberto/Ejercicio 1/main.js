import {CentroComercial} from "./CentroComercial.js"

let centroComercial = new CentroComercial(
    "Puerto Venecia",
    {calle:"Z-40", numero:"3", codigoPostal:"50008"},
    {}
)


// centroComercial.modificarNombre("Cambio Puerto Venecia")

// centroComercial.modificarDireccion({calle:"Z-80", numero:"36", codigoPostal:"50238"})

centroComercial.agregarPlantasYLocales(2, 4)
// centroComercial.agregarPlantasYLocales(4, 2)

centroComercial.asignarTiendas(
    {nombre: "Zara", planta: 1, local: 1},
    {nombre: "Pull&Bear", planta: 1, local: 2},
    {nombre: "Primor", planta: 2, local: 3}
)

centroComercial.imprimeLocales()

// console.log("CentroComercial finaL: ", centroComercial)