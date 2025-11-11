let varTablero; //VARIABLE A USAR LUEGO
let piezas = ["♖","♘","♗","♕","♔","♗","♘","♖"] // ARRAY CON LAS PIEZAS ORDENADAS
let peon = "♙"; // VARIBALE DE PEONES

/* CREAMOS EL TABLERO */
onload = function tablero() {
 /* REFERIMOS LA TABLA VACÍA EN UNA VARIABLE */
 let tabla = document.getElementById("tablero")

 /* CREA EN LA TABLA 8 FILAS CON DO WHILE */
let i = 0
let filas = []
do {
    filas.push(tabla.insertRow(i))
    
    for(let j = 0; j < 8; ++j){
        let columna
        switch (i) {
            case 0:        
                columna = filas[i].insertCell()
                columna.innerHTML = piezas[j]
                columna.classList.add("negras")
                break;
            case 1:
                columna = filas[i].insertCell()
                columna.innerHTML = peon
                columna.classList.add("negras")
                break;
            case 6:
                columna = filas[i].insertCell()
                columna.innerHTML = peon
                columna.classList.add("blancas")
                break;
            case 7:        
                columna = filas[i].insertCell()
                columna.innerHTML = piezas[j]
                columna.classList.add("blancas")
                break;
            default:
                columna = filas[i].insertCell()
                break;
        }
    }
    
    ++i
} while (i < 8)

 /* INSERTA CADA FILA DEL TABLERO EN UNA NUEVA VARIABLE FILA: .insertRow(0), .insertRow(1)....*/
  
//  console.log(tabla.insertRow(1))

//  filas[1].innerHTML = "a"
//  console.log(filas)


/* CREA EN CADA FILA 8 CELDAS. EMPLEA FOR  */
for(let i = 0; i < 8; ++i){

}

 
 /* INSERTA TODAS LAS CELDAS EN SU CORRESPONDIENTES 8 FILAS (a modo de columnas) .insertCell(0), .insertCell(0)*/
   
   
   

 /* AHORA QUE TENEMOS EL TABLERO CONSTRUIDO DE 8X8; CON INNERHTML Y EMPLEADO SWITCH-CASE RELLENA LAS FILAS 0 Y 7 CON LAS PIEZAS CORRESPONDIENTES Y LAS FILAS 1 Y 6 CON LOS PEONES*/

 


 console.log(tabla)

}

//PRACTICAR CON UN FORMULARIO HECHO CON JS Y LUEGO VALIDAR LOS INSERTS