
//4.	Agrega un endpoint '/api/swapi' que responda a una petición de tipo GET con el personaje solicitado de 
//https://swapi.dev/. El cliente debe mandar el número de personaje mediante params. La respuesta del servidor 
//debe lucir algo así
//{ 'personaje': {
//    'name': 'Luke Skywalker',
//            ...,
//} }

const fetch = require('node-fetch');

const express = require('express')
const app = express()
const port = 3000

app.get('/api/swapi/:numeroPersonaje', (req, res) => {
    //entradas;  
    const numeroPersonaje = req.params.numeroPersonaje;
    const Api = "https://swapi.dev/api/people/"+ numeroPersonaje
    console.log(Api)
    //procesos; 
    fetch(Api)
    .then(response => response.json())
    //salidas
    .then(personaje => res.send(personaje));

  
})
 









app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})