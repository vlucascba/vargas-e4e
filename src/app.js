const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT,()=>console.log("listening on port", PORT))

////

let baseDeDatos=0;
app.get("/sumar", (req,res)=>{
    baseDeDatos++
    res.send("valor actual de la base de datos" + baseDeDatos)
});

////


// Ruta para la página de inicio (Home)
app.get('https://github.com/vlucascba/vargas-e4e/blob/299ab28bbc662834159097dde22c32aeb614e164/public/index.html', (req, res) => {
    res.send('Estoy en la página de inicio');
});

// Ruta para la página de detalle de producto
app.get('https://github.com/vlucascba/vargas-e4e/blob/299ab28bbc662834159097dde22c32aeb614e164/public/cursos.html', (req, res) => {
    res.send('Estoy en la página de detalle de producto');
});

// Ruta para la página de inicio de sesión (Login)
app.get('/', (req, res) => {
    res.send('Estoy en la página de inicio de sesión');
});

// Ruta para la página de registro (Register)
app.get('/registrarme', (req, res) => {
    res.send('Estoy en la página de registro');
});

// Ruta para la página del carrito (Cart)
app.get('/carrito', (req, res) => {
    res.send('Estoy en la página del carrito');
});

// Iniciando el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
