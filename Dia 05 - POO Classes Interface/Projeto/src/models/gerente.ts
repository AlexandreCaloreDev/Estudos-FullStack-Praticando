import {Funcionario} from "./funcionario";

export class Gerente extends Funcionario { 

  constructor(
    nome        : string,
    cargo       : string,
    documento   : string,
    salarioBase : number
  ){super(nome, cargo, documento, salarioBase)}
  private readonly percentualBonus = 0.20
  
  calcularRenda() : number {
    return this.salarioBase + (this.salarioBase * this.percentualBonus)
  }
}