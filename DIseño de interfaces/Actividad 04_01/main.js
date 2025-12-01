$(document).ready(() => {
    // Ejercicio 2

    recorrerLista();

    $("ul").append("<li>Nuevo elemento añadido</li>");

    recorrerLista();

    // Ejercicio 3
    console.log("---- Manipulación básica: get() y prevObject ----");

    let primerLi = $("ul li").get(0);
    console.log("Primer <li> usando get(0):", primerLi);

    console.log("Tipo de dato:", typeof primerLi); 
    
    let cadena = $("ul li").first().next();
    console.log("Elemento resultante:", cadena);  
    console.log("prevObject:", cadena.prevObject); 
    
    $("ul li").first().text("Elemento modificado con jQuery"); 
});

function recorrerLista() {
    console.log("---- Recorriendo lista ----");
    $("ul li").each((index, value) => {
        console.log(index + ": " + $(value).text());
    });
}

function funcionalidadMostrarInfo(){
    recorrerLista()
}