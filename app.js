import express from "express";
import errorHandler from "./src/middleware/error-middlewares.js";
import funcionesRouter from "./src/controllers/clases.router.js";
import path from "path";
import clientesRouter from "./src/controllers/clientes.router.js";

const app = express();

app.use(express.json());    

app.use('/api/llamada', funcionesRouter.router)
app.use('/api/cliente', clientesRouter.router)

//esto es de prueba

app.use(express.static('public'));


app.use(errorHandler);

app.listen(3000, () =>{
    console.log('Servidor Listo:3, en el puesto 3000')
})
