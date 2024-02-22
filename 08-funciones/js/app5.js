let total = 0;

function agregar_Carrito (precio) {
    return total += precio;
}

function calcular_Impuesto (){
    return total * 1.15;
}

agregar_Carrito(200);
agregar_Carrito(800);
agregar_Carrito(800);

const totalPagar = calcular_Impuesto(total);

console.log(`Total en el Carrito: ${total}`);
console.log(`Total a Pagar: ${totalPagar.toFixed(2)}`);