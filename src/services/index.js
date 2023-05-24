import clases from "../models/clases.js"

const actual = new clases.Llamada('operador','detalle','duacion','encuesta','observacion')
const cliente = new clases.Cliente('44345121', 'Nicolas Oliva', '351567890', 'vive en alonso')
const cliente2 = new clases.Cliente('44345190', 'Benjamin Pavon', '351567123', 'vive en poeta')
const arrC = [cliente2,cliente]
const clientes = new clases.Cliente()
const c = clientes.getNombreCliente(arrC,cliente2)

const instancias = {
    actual,
    c
}

export default instancias
