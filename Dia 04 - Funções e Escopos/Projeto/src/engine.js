/** * Módulo de Cálculos (engine.ts - Exclusivamente Arrow Functions Puras)
 * * Aqui reside o domínio lógico da aplicação. Este módulo opera sob o princípio de "Zero Side-Effects" (Efeitos Colaterais Nulos). Nenhuma função pode realizar operações de I/O (entrada/saída como console.log) ou alterar o estado de variáveis externas ao seu escopo. Toda função atua como um processo isolado: recebe dados explícitos via parâmetros, aloca memória para processamento local e retorna uma estrutura de dados inteiramente nova.
 */
export const filtrarOperacoes = (operacoes, tipoOperacao) => {
    return operacoes.filter((item) => {
        if (tipoOperacao === "COMPRA") {
            return item.transacao.compra === true;
        }
        return item.transacao.venda === true;
    });
};
export const calcularCustoMedio = (compras) => {
    if (compras.length === 0) {
        return 0;
    }
    const quantidadeTotal = compras.reduce((sum, item) => sum + item.quantidadeCotas, 0);
    if (quantidadeTotal === 0) {
        return 0;
    }
    const volumeFinanceiro = compras.reduce((sum, item) => sum + item.quantidadeCotas * item.precoPago, 0);
    return volumeFinanceiro / quantidadeTotal;
};
export const consolidarCarteira = (transacoes, ativoAlvo) => {
    const ativoUpper = ativoAlvo.toUpperCase();
    const transacoesDoAtivo = transacoes.filter((item) => item.nomeAtivo.toUpperCase() === ativoUpper);
    const comprasDoAtivo = filtrarOperacoes(transacoesDoAtivo, "COMPRA");
    const custoMedio = calcularCustoMedio(comprasDoAtivo);
    const totalCotas = comprasDoAtivo.reduce((sum, item) => sum + item.quantidadeCotas, 0);
    return {
        nomeAtivo: ativoUpper,
        totalCotas,
        custoMedio,
        totalInvestido: totalCotas * custoMedio,
    };
};
