import express from "express";
import  instancias from "../services/index.js";

const router =  express.Router();

router.get('', (req, res) => {
    //codigo
   const actual1 = instancias.c
   //respuesta
    res.json(actual1);
   });

const clientesRouter = {
    router
}
export default clientesRouter