export class Cliente{ //cliente terminado
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