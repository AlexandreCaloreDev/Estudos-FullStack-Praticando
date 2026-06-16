import { Funcionario } from "./funcionario.js";
export class Desenvolvedor extends Funcionario {
    bonusFixo;
    constructor(nome, cargo, documento, salarioBase, bonusFixo) {
        super(nome, cargo, documento, salarioBase);
        this.bonusFixo = bonusFixo;
    }
    calcularRenda() {
        return this.salarioBase + (this.salarioBase * this.bonusFixo);
    }
}
