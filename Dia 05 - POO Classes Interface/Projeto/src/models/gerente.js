import { Funcionario } from "./funcionario.js";
export class Gerente extends Funcionario {
    constructor(nome, cargo, documento, salarioBase) { super(nome, cargo, documento, salarioBase); }
    percentualBonus = 0.20;
    calcularRenda() {
        return this.salarioBase + (this.salarioBase * this.percentualBonus);
    }
}
