import { GestorRespuestaOperador } from "../models/gestor.js"
import estados from "../models/estado.js"

/*const actual = new clases.Llamada('operador','detalle','duacion','encuesta','observacion')
const cliente = new clases.Cliente('44345121', 'Nicolas Oliva', '351567890', 'vive en alonso')
const cliente2 = new clases.Cliente('44345190', 'Benjamin Pavon', '351567123', 'vive en poeta')
const arrC = [cliente2,cliente]
const clientes = new clases.Cliente()
const c = clientes.getNombreCliente(arrC,cliente2)*/
const gestor = new GestorRespuestaOperador()

const fechaActual = gestor.getFechaActual()
console.log(fechaActual)

//el estado de la llamada va a cambiar segun el orden en que se invoquen los metodos
const estadoCurso = gestor.buscarEstadoEnCurso(estados)
console.log(gestor.estadoLlamada)
const estadoCurso1 = gestor.buscarEstadoFinalizado(estados)
console.log(estadoCurso)
console.log(estadoCurso1)
console.log(gestor.estadoLlamada)




/*const instancias = {
    actual,
    c
}

export default instancias*/
