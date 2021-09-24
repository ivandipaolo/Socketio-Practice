//Referencias del html
const lblOnline = document.querySelector('#servOnline')
const lblOffline = document.querySelector('#servOffline')
const inText = document.querySelector('#inText');
const inButton = document.querySelector('#inButton');

const socket = io();

socket.on('connect', () =>{
    console.log('Conectado')
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () =>{
    console.log('Desconectado')
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

inButton.addEventListener('click', () => {
    const msg = inText.value;
    const payload = {
        msg, 
        userid: 'ABC123',
        date: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id)
    });
})

socket.on('enviar-mensaje', (payload) => {
    console.log(payload)
})