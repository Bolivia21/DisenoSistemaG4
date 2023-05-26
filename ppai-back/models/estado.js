export class Estado{
    constructor(nombre){
        this.nombre = nombre;
    }
    esEnCurso() {
        return this.nombre === "EnCurso";
      }

    esFinalizado(estados){
        return this.nombre === "Finalizada"
    }
}
console.log(verificarEstado.esEnCurso(estados))

const enCurso = new Estado("EnCurso")
const finalizada = new Estado("finalizada")
const iniciada = new Estado("iniciada")

let estados = [iniciada, enCurso, finalizada]
export default estados