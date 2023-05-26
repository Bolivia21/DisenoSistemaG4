export class GestorRespuestaOperador {
    RegistrarRespuestaOperador(){ // En teoria todos los metodos del gestor estan aca adentro en orden de ejecucion
        PantallaRespuestaOperador.mostrarPantalla(); //le invoco el metodo a la Pantalla
        this.getFechaEstadoActual();
        this.buscarEstadoEnCurso();
        this.getFechaActual();
        Llamada.actualizarEnCurso();
        this.buscarValidaciones();
        this.ordenarValidaciones();
        this.buscarClientePorDNI();
        Llamada.getDatosLlamada();
        this.mostrarDatosLlamada();
        //aca tengo dudas de donde haria el loop de validaciones
        PantallaRespuestaOperador.solicitarDescripcionOperador();
        this.tomarDescripcionOperador();
        Llamada.setDescripcionOperador();
        PantallaRespuestaOperador.solicitarAccionRequerida();
        this.tomarAccionRequerida();
        PantallaRespuestaOperador.solicitarConfirmacionOperador();
        this.tomarConfirmacionOperacion();
        //aca tengo dudas de como llamaria al otro caso de uso;
        PantallaRespuestaOperador.informarExitoRegistroAccion();
        this.buscarEstadoFinalizado();
        this.calcularDuracionLlamada();
        Llamada.setDuracion();
        this.finCasoDeUso();
    }

    getFechaEstadoActual(){
        Llamada.getFechaEstadoActual() // le invoco el metodo a llamada
    }

    buscarEstadoEnCurso() {
        Estado.esEnCurso(); //invoco el metodo de Estado (Tengo duda de si el for por el asterisco va aca o en el metodo)
    }

    getFechaActual() {
        const fecha = newDate(); 
        return fecha; //retorno la fecha para ser comparada
    }

    buscarValidaciones() {
        Llamada.buscarValidaciones() // invoco el metodo de Llamada
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