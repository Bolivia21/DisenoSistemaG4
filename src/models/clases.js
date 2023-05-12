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
    esEnCurso(){

    }
    esFinalizado(){

    }
}

class subOpcionLlamada{
    constructor(nombre, nroOrden){
        this.nombre = nombre;
        this.nroOrden = nroOrden;

    }
    getValidaciones(){

    }
    esCorrecta(){

    }

}

class Validacion{
    constructor(audioMensajeValidacion,nombre){
        this.audioMensajeValidacion = audioMensajeValidacion;
        this.nombre = nombre;
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
    esCorrecta(){

    }
}

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



