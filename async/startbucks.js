const pedido1 = {tipo: 'late', cliente: 'Maria'};
const pedido2 = {tipo: 'limonada', cliente: 'Pablo'};

function procesarPedidos(pedido, callbackCliente){
    switch (pedido.tipo) {
        case 'late':
            setTimeout(() => {
                callbackCliente(pedido.cliente);
            }, 4000);
            break;
        case 'limonada':
            setTimeout(() => {
                callbackCliente(pedido.cliente);
            }, 2000);
            break;
        default:
            break;
    }
}

procesarPedidos(pedido1, function(cliente) {
    console.log('Llamar a cliente:' + cliente);
});

procesarPedidos(pedido2, cliente => console.log('Llamar a cliente:' + cliente));

