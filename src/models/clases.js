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

class Cliente{ //cliente terminado
    constructor(dni, nombreCompleto, nroCelular, info){
        this.dni = dni;
        this.nombreCompleto = nombreCompleto;
        this.nroCelular = nroCelular;
        this.info= info
    }
    esTuDni(clientes, dniAComparar){
        cliente = undefined
        for (i = 0; i < clientes.length; i++){
        if (clientes[i].dni === dniAComparar){
            cliente = clientes[i]
        }}
        return cliente
    }
    getNombreCliente(cliente){
        if (cliente !== undefined){
            return cliente.nombreCompleto
        }else {
            return 'El cliente no existe'
        }
    }
}

class CambioEstado {
    constructor(fechaHoraInicio, fechaHoraFin, estado){
        this.fechaHoraInicio = fechaHoraInicio;
        this.fechaHoraFin = fechaHoraFin;
        this.estado = estado
    }
    esEstadoInicial(){

    }
    esUltimoEstado(){

    }
    getNombreEstado(){

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



