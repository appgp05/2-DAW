let abcedario = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

let numeroDNI = 58385037
let letraDNI = abcedario[numeroDNI % abcedario.length]

console.log(letraDNI)