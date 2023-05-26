export class Estado{
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
