let mesesDelAno = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

mesesDelAno.forEach(mes => {
    (
        document.getElementById("resultados").innerHTML += "<p>"+mes+"</p>"
    )
});
