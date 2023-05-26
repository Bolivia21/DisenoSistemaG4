import express from "express";
import actual from "../services/index.js";

const router =  express.Router();

router.get('', (req, res) => {
    //codigo
   const actual1 = actual
   //respuesta
    res.json(actual1);
   });

const funcionesRouter = {
    router
}
export default funcionesRouter