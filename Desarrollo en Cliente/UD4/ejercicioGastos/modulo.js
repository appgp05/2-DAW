export {actualizarPresupuesto, mostrarPresupuesto, Gasto}

let presupuestoDisponible = 10000

let actualizarPresupuesto = (presupuesto) => {
    if(presupuesto >= 0){
        presupuestoDisponible = presupuesto
        return presupuesto
    } else {
        return -1
    }
}

let mostrarPresupuesto = () => {
    return "Tu presupuesto actual es de " + presupuestoDisponible + "€"
}

class Gasto{
    descripcion
    valor
    fecha
    etiquetas

    constructor(
        descripcion,
        valor,
        fecha,
        etiquetas
    ){
        this.descripcion = descripcion
        this.valor = valor >= 0 ? valor : 0
        this.fecha = fecha
        this.etiquetas = etiquetas
    }

    mostrarGasto(){
        return "Gasto correspondiente a " + this.descripcion + " con valor " + this.valor + "€"
    }

    actualizarDescripcion(descripcion){
        this.descripcion = descripcion
    }

    actualizarValor(valor){
        this.valor = valor
    }
}