const fetch = require('node-fetch');

fetch("http://localhost:3000/api/fechahora")
    .then(promesa => promesa.json())
    .then(contenido => console.log(contenido));