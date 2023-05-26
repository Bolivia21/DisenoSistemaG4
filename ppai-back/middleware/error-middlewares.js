import { ResourceNotFound } from "../errors/resource-not-found-error.js";

const errorHandler = (err,req,res,next) => {
    if(err == undefined)
        next();
    if (err instanceof ResourceNotFound){
        //el body que va atener la response es el json y el status(404) con status
        return res.status(err.status).json({error: err.message})
    }
    if (err instanceof ValidationError){
        return res.status(400).json({error: err.message})
    }
    return res.status(500).json({error: 'Error imprevisto. Intente nuevamente'})


}

export default errorHandler