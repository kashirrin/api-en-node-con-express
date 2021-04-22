const fetch = require('node-fetch');

function temporizador(){
    fetch("http://localhost:3000/api/fechahora")
        .then(promesa => promesa.json())
        .then(contenido => console.log(contenido));
        
}
setInterval(temporizador, 5000);
