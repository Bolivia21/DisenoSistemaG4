export class Llamada {
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
            const fechaActual = Date.now();
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
    getClientePorDni(){

    }
    getDatosLlamada(){

    }
    esCorrecta(){

    }
    setDescripcionOperador(){

    }
    
}

