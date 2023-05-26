export class OpcionValidacion{
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