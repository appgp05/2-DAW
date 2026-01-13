addEventListener("DOMContentLoaded", () => {
    addEventListener("mousemove", (event) => {
        // console.log(event.x, event.y)
        document.getElementById("x").innerHTML = "X: " + event.x
        document.getElementById("y").innerHTML = "Y: " + event.y
        
        let x
        let y

        if(event.x < window.innerWidth/2){
            x = "Izquierda"
        } else {
            x = "Derecha"
        }

        if(event.y < window.innerHeight/2){
            y = "Arriba"
        } else {
            y = "Abajo"
        }
        
        document.getElementById("posicion").style.fontWeight = "100"
        document.getElementById("posicion").innerHTML = y + " " + x

        addEventListener("click", () => {
            
            document.getElementById("posicion").style.fontWeight = "900"
        })
    })
})