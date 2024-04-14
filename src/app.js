const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT,()=>console.log("listening on port"+ PORT))

var bodyParser = require ("body-parser");
var methodOverride = require ("method-override");

// Iniciando el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
//
//app.use(bodyParser());
//app.use(methodOverride());
//app.use(function(err, req, res, next){
    // logic
//});


// Ruta para la página de inicio (Home)
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'home');
});

// Ruta para la página de detalle de producto
app.get('/', (req, res) => {
    res.send(__dirname + 'cursos');
});

// Ruta para la página de inicio de sesión (Login)
app.get('/', (req, res) => {
    res.send(__dirname + 'login');
});

// Ruta para la página de registro (Register)
app.get('/', (req, res) => {
    res.send(__dirname + 'registro');
});

// Ruta para la página del carrito (Cart)
app.get('/carrito', (req, res) => {
    res.send(__dirname + 'carrito');
});


