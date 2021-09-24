const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado')
    });

    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 123456;
        callback(id);
        //No tengo el this.io entonces el socket hace lo mismo
        socket.broadcast.emit('enviar-mensaje', payload)
    })
}

module.exports = {
    socketController
}