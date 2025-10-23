let nombre = prompt("Introduce tu nombre")
console.log(nombre)
// let a = confirm("Te ha gustado?")
// console.log(a)


// let x = 2342342344.43544;
// // x = 2;
// let text
// text = x.toString();
// text = x.toExponential(10)
// text = x.toFixed(2)
// text = x.toPrecision(12)
// text = x.valueOf()
// text = Number.isFinite(x)
// text = Number.isInteger(x)
// text = Number.isNaN(x)
// text = Number.isSafeInteger(x)
// text = Number.parseInt(x)
// text = Number.parseFloat(x)

// document.getElementById("demo").innerHTML = text;



// let x = 123;
// document.getElementById("demo").innerHTML =
// x.toString() + "<br>" +
// (123).toString() + "<br>" +
// (100 + 23).toString();





// // 3)
// console.log('A la gente de Zaragoza de les llama "Maños" ' + "Nacimos en los años 70'")
// console.log(`A la gente de Zaragoza de les llama "Maños" Nacimos en los años 70's`)

// // 4)
// console.log('"Maños" de los 70\'s')

// // 5)
// let b = "cadena";
// console.log(b + " " + b);

// // 6)
// var txt = "SUPERCALIFRAGILISTICOESPIALIDOSO";
// console.log(txt.length);

// // 7)
// document.body.style.backgroundColor = "red";

// // 9)
// console.log('\xE6')

// // 10)
// let caracter = "\u03c0"
// let pi = Math.PI
// console.log(`<El número "`+caracter+`" tiene un valor de `+pi+">")

// //11)
// console.log("\'Salir con alguien\' \nes distinto de \n\t\t\t\t\"Salir con alguien\"")


// console.log(undefined == null)
// console.log("15 == 15", 15 == 15)            //true
// console.log(`15 == "15"`, 15 == "15")        //true
// console.log(`15 === 15`, 15 === 15)          //true
// console.log(`15 === "15"`, 15 === "15")      //false
// console.log("15 == 16", 15 == 16)            //false
// console.log(`15 == "16"`, 15 == "16")        //false
// console.log(`15 === 16`, 15 === 16)          //false
// console.log(`15 === "16"`, 15 === "16")      //false













// let minombre;
// let a = null;
// let b = "cadena";
// let c = 15;
// let d = true;
// console.log(typeof minombre + " " + minombre); //undefined
// console.log(typeof a + " " + a); //objetc
// console.log(typeof b + " " + b); //string
// console.log(typeof c + " " + c); //number
// console.log(typeof d + " " + d); //boolean










// var mensaje = "Hola Mundo!";
// if (true) {
// var mensaje = "Se ha cambiado el mensaje variable global";
// let mensaje = "Se ha cambiado el mensaje";
// }
// console.log(mensaje);












// // a primera*/
// for (var i = 0; i < 2; i++) {
//     console.log("Tercero", i);

//     for (var i = 0; i < 2; i++) {
//         console.log("Cuarto", i);
//     }
// }
//     /*Con let es como si i fuese dos variables diferentes. Let tiene ambito detro del bloque */
// for (let i = 0; i < 2; i++) {
//     console.log("Primer", i);

//     for (let i = 0; i < 2; i++) {
//         console.log("Segundo", i);
//     }
// }














// console.log(x); // ReferenceError: x is not defined
// var i; // Variable declarada pero valor no inicializado
// console.log(i); // undefined
// console.log(x); //undefined
// var x = 1;
// i = 1;
// console.log(i); // 1
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 1;










// alert("b");

// function alertar() {
//     alert("abc");
// }