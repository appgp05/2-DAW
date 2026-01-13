addEventListener("DOMContentLoaded", () => {
    document.getElementById("imagen1").addEventListener("mouseenter", () => {
        document.getElementById("texto").innerHTML = "Mando"
    })
    document.getElementById("imagen1").addEventListener("mouseout", () => {
        document.getElementById("texto").innerHTML = "Fuera"
    })
    document.getElementById("imagen2").addEventListener("mouseenter", () => {
        document.getElementById("texto").innerHTML = "CPIFP Los enlaces"
    })
    document.getElementById("imagen2").addEventListener("mouseout", () => {
        document.getElementById("texto").innerHTML = "Fuera"
    })
})