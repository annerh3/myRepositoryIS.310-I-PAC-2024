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
console.log(carrito);

