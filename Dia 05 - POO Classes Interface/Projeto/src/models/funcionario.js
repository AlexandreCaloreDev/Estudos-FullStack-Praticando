export class Funcionario {
    nome;
    cargo;
    documento;
    salarioBase;
    constructor(nome, cargo, documento, salarioBase) {
        this.nome = nome;
        this.cargo = cargo;
        this.documento = documento;
        this.salarioBase = salarioBase;
        if ((this.nome === "") ||
            (this.cargo === "") ||
            (this.documento === "")) {
            return;
        }
        if (this.salarioBase < 0) {
            this.salarioBase = 0;
        }
    }
}
