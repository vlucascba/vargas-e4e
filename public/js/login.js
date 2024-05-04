

const bcrypt = require('bcrypt');


let hashPassword = "$2b$10$rWb7VI6jSyNjnfwdBkO/ae.hYocvsAO.lAD7GqF0k5x7S9GRO4BWW";
const password = "password123";
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.error(err);
            return;
        }


        console.log(hash);
    });

    let passwordIsValid = bcrypt.compareSync("password123", hashPassword);
    console.log(passwordIsValid);



/* const cookieParser = require('cookie-parser');
const express = require('express');
const sessions = require('express-sessions')
const unDia = 1000 * 60 * 60 * 24;


// definimos dentro de express, (middlewares)//

application.use(sessions({
    secret: "123456",
    saveUninitialized: true,
    cookie: {maxAge: unDia},
    resave: false
}));
application.use(cookieParser()); */


/*
let USUARIO_SESION_VALIDO = {
    nombre: "ususario",
    password: ""
}

var esValidoElPasswordHasheado = bcrypt.compareSync(password, passwordEncriptadoEsperado);// */


let INFORMACION_USUARIO = [
    {
        id: 1,
        username: "Usuario 1",
        email: "email@email.com",
        apellido: "appelidoususario1"
    },
    {
        id: 2,
        username: "Usuario 2",
        email: "email@email.com",
        apellido: "appelidoususario2"
    }
];

let USUARIO_SESION_VALIDO = {
    username: "usuario",
    password: "123123123"
}

module.exports = {
    INFORMACION_USUARIO,
    USUARIO_SESION_VALIDO
};

if (nombre == USUARIO_SESION_VALIDO.nombre&& esValidoElPaswordHaseado) {
    session = req.session;
    session.userid = username;
}