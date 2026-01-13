addEventListener("DOMContentLoaded", () => {
    addEventListener("mousemove", () => {
        document.querySelectorAll(":hover").forEach(function (elemento) {
            elemento.addEventListener("mouseenter", () => {
                document.getElementById("texto").innerHTML = elemento.id
            })
            elemento.addEventListener("mouseout", () => {
                document.getElementById("texto").innerHTML = "Fuera"
            })
        })
    })
})