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
<<<<<<< HEAD:ppai-back/src/models/clases.js
    constructor(estado){
        this.fechaHoraInicio = Date.now();
=======
    constructor(fechaHoraInicio, fechaHoraFin, estado){
        this.fechaHoraInicio = fechaHoraInicio;
        this.fechaHoraFin = fechaHoraFin;
>>>>>>> 416bd15c864018416ee8522459599c7fb0ae9c6a:src/models/clases.js
        this.estado = estado
    }
    esEstadoInicial(){

    }
    }
    getFechaHoraInicio(){
        return this.fechaHoraInicio
    }
     getNombreEstado(){
        return this.estado.nombre
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



