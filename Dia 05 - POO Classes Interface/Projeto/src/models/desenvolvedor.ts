import {Funcionario} from "./funcionario"

class Desenvolvedor extends Funcionario {
  constructor(
    public nome        : string,
    public cargo       : string, 
    public documento   : string,
    public salarioBase : number,
    public bonusFixo   : number
  ){super(nome, cargo, documento, salarioBase),
    this.bonusFixo = bonusFixo
  }
 
  calcularRenda() : number {
    return this.salarioBase + this.bonusFixo
  }
  
}