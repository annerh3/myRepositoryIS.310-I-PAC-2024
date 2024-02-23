// Crea un programa en JavaScript que resuelva una ecuación cuadrática de la forma ax² + bx + c = 0.
alert('Resolver una Ecuación Cuadrática')
const valorA= parseInt(prompt("Ingrese el Valor de A: "))
const valorB = parseInt(prompt("Ingrese el Valor de B: "))
const valorC = parseInt(prompt("Ingrese el Valor de C: "))

let raiz = Math.sqrt( ( Math.pow(valorB,2) ) - (4*valorA*valorC) )

let resultado1 = ((-1*valorB) + raiz) / (2*valorA)

let resultado2 = ((-1*valorB) - raiz) / (2*valorA)

console.log('Las soluciones son x1= ' + resultado1.toFixed(2) + ' y x2= ' + resultado2.toFixed(2)); 

let raiz2 = Math.sqrt(16)
console.log(raiz2);