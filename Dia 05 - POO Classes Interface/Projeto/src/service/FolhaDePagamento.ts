import { Funcionario } from "../models/funcionario.js";

export class FolhaDePagamento {
  calculaFolhaDePagamento(listaFuncionarios : Funcionario[]) : number {
    let acumuladorSalario : number = 0 
    let salarioAtual : number = 0 
    listaFuncionarios.forEach(funcionario => {
        salarioAtual = funcionario.calcularRenda()
        console.log('O salário atual com o bonus é: ' + salarioAtual + ' o cargo do funcionário é: ' + funcionario.cargo + ' e o nome do funcionário é: ' + funcionario.nome);
        acumuladorSalario += salarioAtual
    });
    return acumuladorSalario
    }
}