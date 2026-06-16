import { Remuneravel } from '../interfaces/remuneravel.js'

export abstract class Funcionario implements Remuneravel {
  constructor(
    public nome        : string,
    public cargo       : string, 
    public documento   : string,
    public salarioBase : number
  ) {
     if (
      (this.nome  === "") || 
      (this.cargo === "") ||
      (this.documento === "")){
        return
      }
    if(this.salarioBase < 0){
      this.salarioBase = 0
     }
  }
  abstract calcularRenda() : number
}