import { actualizarEstado, getDatosLlamada, setDescripcionOperador, setDuracion } from "./llamada.js";
import { mostrarPantalla,
    solicitarDescripcionOperador,
    solicitarAccionRequerida,
    solicitarConfirmacionOperador,
    informarExitoRegistroAccion } from "./pantallarespuestaoperador.js";
import { esEnCurso, esFinalizado, estados } from "./estado.js";

export class GestorRespuestaOperador {
    constructor(llamadaActual, categoriaSeleccionada, opcionLlamadaSeleccionada,dniCliente,estadoEnCurso,
        subOpcionSeleccionada, fechaHoraActual, estadoLlamada, validaciones, estadoFinalizado){
            this.llamadaActual = llamadaActual;
            this.categoriaSeleccionada = categoriaSeleccionada;
            this.opcionLlamadaSeleccionada = opcionLlamadaSeleccionada;
            this.dniCliente = dniCliente;
            this.subOpcionSeleccionada = subOpcionSeleccionada;
            this.fechaHoraActual = null;
            this.estadoLlamada = estadoLlamada;
            this.validaciones = validaciones
            this.estadoEnCurso = null;
            this.estadoFinalizado = null
    }

    RegistrarRespuestaOperador(){ // En teoria todos los metodos del gestor estan aca adentro en orden de ejecucion
        pantalla.mostrarPantalla(); //le invoco el metodo a la Pantalla
        this.getFechaEstadoActual();
        const estadoEnCurso = this.buscarEstadoEnCurso(estados);
        let fecha = this.getFechaActual();
        llamada.actualizarEstado(estadoEnCurso, fecha);
        this.buscarValidaciones();
        this.ordenarValidaciones();
        this.buscarClientePorDNI();
        llamada.getDatosLlamada();
        this.mostrarDatosLlamada();
        //aca tengo dudas de donde haria el loop de validaciones
        pantalla.solicitarDescripcionOperador();
        this.tomarDescripcionOperador();
        llamada.setDescripcionOperador();
        pantalla.solicitarAccionRequerida();
        this.tomarAccionRequerida();
        pantalla.solicitarConfirmacionOperador();
        this.tomarConfirmacionOperacion();
        //aca tengo dudas de como llamaria al otro caso de uso;
        pantalla.informarExitoRegistroAccion();
        this.buscarEstadoFinalizado();
        this.calcularDuracionLlamada();
        llamada.setDuracion();
        this.finCasoDeUso();
    }

    getFechaEstadoActual(){
        llamada.getFechaEstadoActual() // le invoco el metodo a llamada
    }

    buscarEstadoEnCurso(estados) {
        // meto en una constante el array estados, luego buso el esEncurso y si lo encuentra
        //asigna al atributo estadoEnCurso el nombre. sino lo encuentra devuelve null
        for (const estado of estados) {
          if (estado.esEnCurso()) {
            this.estadoEnCurso= estado.nombre
            return estado;
          }
        }
        return null;
      }
    
    //asigno fecha y hora al atributo
    getFechaActual() {
        const fechaActual = newDate(); 
        this.fechaHoraActual = fechaActual
        return fechaActual; //retorno la fecha para ser comparada
    }

    buscarValidaciones(llamada) {
        const validaciones = llamada.getValidaciones();

    }

    ordenarValidaciones() {

    }

    buscarClientePorDNI() {
        Llamada.getClientePorDni()
    }

    mostrarDatosLlamada() {
        PantallaRespuestaOperador.mostrarDatosLlamada()
        PantallaRespuestaOperador.mostrarNombreCliente()
        PantallaRespuestaOperador.mostrarCategoriaSeleccionada()
        PantallaRespuestaOperador.mostrarOpcionSeleccionada()
        PantallaRespuestaOperador.mostrarSubOpcionSeleccionada()
    }

    verificarSeleccionOpcion() {
        Llamada.esCorrecta()
    }

    tomarDescripcionOperador() {

    }

    tomarAccionRequerida() {

    }

    tomarConfirmacionOperacion() {

    }

    buscarEstadoFinalizado(estados) {
        //lo mismo que esEnCurso
        for (const estado of estados) {
            if (estado.esFinalizado()) {
                this.estadoFinalizado = estado.nombre
                return estado;
            }
          }
          return null;
    }

    calcularDuracionLlamada() {

    }

    finCasoDeUso() {

    }
}