const express = require('express');
// Se utiliza la colección de date and time para poder obtener la fecha y hora de manera facil y sencilla.
// Nota: (Debe ser descargado de ante mano a la paqueteria: npm install date-and-time --save)
const date = require('date-and-time')
// Se crea un objeto de la clase date and time, en este caso "now", utilizando Date().
const now  =  new Date();
// Se le da formato a la fecha y hora usando el metodo date.format().
const fecha = date.format(now,'DD/MM/YYYY HH:mm:ss');
const app = express();

// Se manejara el control de encendido de el led, por medio de la URL del sitio, en el cual si se ingresa el número 1
// encendera el led, en caso contrario, ingresar cualquier otro número resultara en el led apagado.
app.get('/api/led/:id', (req, res) => {
    if(req.params.id == 1){
        res.send('El led se encuentra encendido.');
    }else if(req.params.id != 1){
        res.send('El led se encuentra apagado.');
    }
});

// APi para manejar la fecha y hora actual.
app.get('/api/fechahora', async (req, res) => {
    res.send(`La fecha de hoy es: `+fecha);
});

// ports
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening in port ${port}`));