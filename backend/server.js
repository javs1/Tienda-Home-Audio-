import express from 'express';
import info from './info';

const app= express();
app.get("/api/productos"), (req,res)=>{
    res.send(info.productos);

}
app.listen(5000, ()=>{console.log("Inicio de servidor http://localhost:5000")})