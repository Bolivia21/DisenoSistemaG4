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
    getClientePorDni(){

    }
    getDatosLlamada(){

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
    getNombreCliente(clientes, cliente){
    for(let i = 0; i < clientes.length; i++){
        if (clientes[i].nombreCompleto === cliente.nombreCompleto){
            return cliente.nombreCompleto
        }
   }
   return 'El cliente No existe'
}}

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

class GestorRespuestaOperador {
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

export default {
    Llamada,
    Estado,
    subOpcionLlamada,
    Validacion,
    OpcionValidacion,
    Cliente,
    CambioEstado,
    GestorRespuestaOperador,

}



