export class FolhaDePagamento {
    calculaFolhaDePagamento(listaFuncionarios) {
        let acumuladorSalario = 0;
        let salarioAtual = 0;
        listaFuncionarios.forEach(funcionario => {
            salarioAtual = funcionario.calcularRenda();
            console.log('O salário atual com o bonus é: ' + salarioAtual + ' reais, o cargo do funcionário é: ' + funcionario.cargo + ' e o nome do funcionário é: ' + funcionario.nome);
            acumuladorSalario += salarioAtual;
        });
        return acumuladorSalario;
    }
}
