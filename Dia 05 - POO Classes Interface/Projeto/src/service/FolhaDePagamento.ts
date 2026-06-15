import { Funcionario } from "../models/funcionario";

export class FolhaDePagamento {
  calculaFolhaDePagamento(listaFuncionarios : Funcionario[]) : number {
    let acumuladorSalario : number = 0 
    let salarioAtual : number = 0 
    listaFuncionarios.forEach(funcionario => {
        salarioAtual = funcionario.calcularRenda()
        console.log('O salário atual com o bonus é: ' + salarioAtual)
        acumuladorSalario += salarioAtual
    });
    return acumuladorSalario
    }
}