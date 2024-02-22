const meses = ['Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']
// meses[0] = 'Enero'
// meses[5] = 'Julio'

meses.push('Julio')
meses.unshift('Enero')

console.log(meses);

const carrito = [];

const producto = {
    nombre: 'Roblox',
    precio: '10',
    cantidad: '1'
}

const producto2 = {
    nombre: 'FC EA',
    precio: '60',
    cantidad: '1'
}

carrito.push(producto, producto2);
// carrito.push(producto2)

console.log(carrito);

const producto3 = {
    nombre: 'Sobres FC',
    precio: '90',
    cantidad: '1'
}


carrito.unshift(producto3);
