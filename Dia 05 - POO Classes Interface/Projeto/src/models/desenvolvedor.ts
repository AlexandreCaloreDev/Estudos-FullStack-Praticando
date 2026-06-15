import {Funcionario} from "./funcionario"

export class Desenvolvedor extends Funcionario {
  constructor(
    nome        : string,
    cargo       : string, 
    documento   : string,
    salarioBase : number,
    private bonusFixo   : number
  ){super(nome, cargo, documento, salarioBase)
  }
  calcularRenda() : number {
    return this.salarioBase + (this.salarioBase * this.bonusFixo)
  }
  
}