$(document).ready(() => {
    function recorrerLista() {
        console.log("---- Recorriendo lista ----");
        $("ul li").each((index) => {
            console.log(index + ": " + $(this).text());
        });
    }

    recorrerLista();

    $("ul").append("<li>Nuevo elemento añadido</li>");

    recorrerLista();

    console.log("---- Manipulación básica: get() y prevObject ----");

    // 1. Seleccionar el primer <li> con get(0) y mostrarlo en consola
    let primerLi = $("ul li").get(0);
    console.log("Primer <li> usando get(0):", primerLi);

    // 2. Observar tipo de dato devuelto (HTML element)
    console.log("Tipo de dato:", typeof primerLi); 
    // → "object" pero es un elemento HTML, no un objeto jQuery

    // 3. Encadenar dos selecciones y mostrar prevObject
    let cadena = $("ul li").first().next();
    console.log("Elemento resultante:", cadena);  
    console.log("prevObject:", cadena.prevObject); 
    // prevObject muestra la selección previa en la cadena jQuery

    // 4. Modificar el texto del primer <li> usando jQuery
    $("ul li").first().text("Elemento modificado con jQuery");
});
