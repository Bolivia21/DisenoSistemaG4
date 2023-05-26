import { actualizarEstado, getDatosLlamada, setDescripcionOperador, setDuracion } from "./llamada.js";
import { mostrarPantalla,
    solicitarDescripcionOperador,
    solicitarAccionRequerida,
    solicitarConfirmacionOperador,
    informarExitoRegistroAccion } from "./pantallarespuestaoperador.js";
import { esEnCurso, esFinalizado, estados } from "./estado.js";

export class GestorRespuestaOperador {
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
        for (const estado of estados) {
          if (estado.esEnCurso()) {
            return estado;
          }
        }
        return null;
      }

    getFechaActual() {
        const fecha = newDate(); 
        return fecha; //retorno la fecha para ser comparada
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

    buscarEstadoFinalizado() {
        Estado.esFinalizado()
    }

    calcularDuracionLlamada() {

    }

    finCasoDeUso() {

    }
}