const express = require("express")
const app = express()



const PORT=3000

app.listen(PORT,()=>console.log("listening on port", PORT))

let baseDeDatos=0;
app.get("/sumar", (req,res)=>{
    baseDeDatos++
    res.send("valor actual de la base de datos" + baseDeDatos)
});