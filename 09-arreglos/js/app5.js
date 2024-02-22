let carrito = [];

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

const producto3 = {
    nombre: 'Sobres FC',
    precio: '90',
    cantidad: '1'
}

carrito = [...carrito, producto]
carrito = [...carrito,producto2]
carrito = [producto3, ...carrito]

// carrito.pop(); // eliminar ultima posicion

// carrito.shift // Elimina la PRIMERA POSICION

carrito.splice(1,2) // a partir de que posicion afectar, y dspues cuantos elemtos afectar

console.log(carrito);

console.log(carrito);