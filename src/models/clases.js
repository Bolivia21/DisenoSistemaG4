class Llamada {
    constructor(descripcionOperador,detalleAccionRequerida,
        duracion,encuestaEnviada,observacionAuditor,cliente,operador,subOpcion,opcion,auditor){
            this.descripcionOperador = descripcionOperador;
            this.detalleAccionRequerida = detalleAccionRequerida;
            this.duracion = duracion;
            this.encuestaEnviada = encuestaEnviada;
            this.observacionAuditor = observacionAuditor;
            this.cliente= cliente
            this.operador= operador
            this.subOpcion= subOpcion
            this.opcion= opcion 
            this.cambioEstado= []
            this.auditor = auditor


        }
    getFechaActual(){ 
            const fechaActual = new Date();
            return fechaActual 
    
        }
    setEstadoActual(estado){
            const actual = this.getFechaActual() 
            const cambioEstado = new CambioEstado(actual,estado)
            this.cambioEstado.push(cambioEstado)
        }
    getEstadoActual(){
            const actual= this.cambioEstado.pop()
            return actual
        }
     setDuracion (){
            const fechaActual = this.getFechaActual();
            const fechaInicio = this.cambioEstado[this.cambioEstado.length - 1].getFechaHoraInicio();
            const duracion = fechaActual - fechaInicio;
            this.duracion = duracion;
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
    constructor(estado){
        this.fechaHoraInicio = new Date();
        this.estado = estado
    }
    getFechaHoraInicio(){
        return this.fechaHoraInicio
    }
     getNombreEstado(){
        return this.estado.nombre
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



