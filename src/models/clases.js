class Llamada {
    constructor(descripcionOperador,detalleAccionRequerida,
        duracion,encuestaEnviada,observacionAuditor){
            this.descripcionOperador = descripcionOperador;
            this.detalleAccionRequerida = detalleAccionRequerida;
            this.duracion = duracion;
            this.encuestaEnviada = encuestaEnviada;
            this.observacionAuditor = observacionAuditor;
        }
    getFechaEstadoActual(fecha){ 
        fechaEstado = fecha;

        return console.log(`La fecha del estado ${fechaEstado}`)
    }
    actualizarEnCurso(){

    }
    getValidaciones(){

    }
    getClientesPorDni(){

    }
    getDatosLlamadas(){

    }
    esCorrecta(){

    }
    setDescripcionOperador(){

    }
    actualizarFinalizado(){

    }
    setDuracion(){

    }
}

class Estado{
    constructor(nombre){
        this.nombre = nombre;
    }
    esEnCurso(estados){
        for(let i = 0; i < estados.length ; i++){
            if(estados[i]=== "enCurso"){
                return true
            }
        return false 
        }
    }
    esFinalizado(estados){
        for(let i = 0; i < estados.length ; i++){
            if(estados[i]=== "esFinalizada"){
                return true
            }
        return false 
        }
    }
}

const estados = new Array("enCurso", "esCancelada", "esFinalizada", "esInicializada");
const verificarEstado = new Estado("enCurso");
console.log(verificarEstado.esEnCurso(estados))

class subOpcionLlamada{
    constructor(nombre, nroOrden,validacionRequerida){
        this.nombre = nombre;
        this.nroOrden = nroOrden;
        this.validacionRequerida = validacionRequerida

    }
    getValidaciones(){

    }
    esCorrecta(){

    }

}

class Validacion{
    constructor(audioMensajeValidacion,nombre,opcionesValidacion,tipo){
        this.audioMensajeValidacion = audioMensajeValidacion;
        this.nombre = nombre;
        this.opcionesValidacion = opcionesValidacion;
        this.tipo = tipo
    }
    getValidacion(){

    }
    esCorrecta(){

    }
}

class OpcionValidacion{
    constructor(correcta, descripcion){
        this.correcta = correcta;
        this.descripcion = descripcion;
    }
    getOpcionesValidaciones(){

    }
    esCorrecta(array, correcto){ 
        for(let i = 0; i < array.length ; i++){
            if(array[i] === correcto ){
                return true
            }
        }
        return false
    }
}
const opcionArray = ['No', 'Si', 'Correcta', 'correcto']
const opcioncorrec = new OpcionValidacion()
console.log(opcioncorrec.esCorrecta(opcionArray,'Correcta'))

class Cliente{
    constructor(dni, nombreCompleto, nroCelular){
        this.dni = dni;
        this.nombreCompleto = nombreCompleto;
        this.nroCelular = nroCelular;
    }
    esTuDni(){

    }
    getNombreCliente(){

    }
}

class CambioEstado {
    constructor(fechaHoraInicio, fechaHoraFin){
        this.fechaHoraInicio = fechaHoraInicio;
        this.fechaHoraFin = fechaHoraFin
    }
    esActual(){

    }
    getFechaHoraInicio(){

    }
}

export default {
    Llamada,
    Estado,
    subOpcionLlamada,
    Validacion,
    OpcionValidacion,
    Cliente,
    CambioEstado,
}



