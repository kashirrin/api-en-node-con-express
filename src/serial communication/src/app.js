require('dotenv').config(); // Variables de entorno.
const fetch = require('node-fetch');

const arduinoPort = 'COM3'; // Varia dependiendo del dispositivo.

// Configuración para la comunicación serial.
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort(arduinoPort, { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

// Se llama al iniciar la comunicación serial.
port.on("open", () => {
    console.clear();
    console.log("Serial communication started...");
});