/** * Módulo de Cálculos (engine.ts - Exclusivamente Arrow Functions Puras)
 * * Aqui reside o domínio lógico da aplicação. Este módulo opera sob o princípio de "Zero Side-Effects" (Efeitos Colaterais Nulos). Nenhuma função pode realizar operações de I/O (entrada/saída como console.log) ou alterar o estado de variáveis externas ao seu escopo. Toda função atua como um processo isolado: recebe dados explícitos via parâmetros, aloca memória para processamento local e retorna uma estrutura de dados inteiramente nova.
 */

// ============================================================================
// Função 1: filtrarOperacoes
// ============================================================================
/**
 * Contexto de Domínio: 
 * Em um consolidador de carteira corporativa ou pessoal, as métricas de performance exigem o isolamento rigoroso de eventos. Para calcular o preço médio de aquisição de um fundo imobiliário ou ação, os registros de venda (liquidação) devem ser ignorados. Esta função garante a extração isolada de um tipo específico de operação.
 * * Analogia Técnica: 
 * Em um centro de distribuição logístico (Motor de Cálculo), uma esteira principal recebe pacotes de diversos destinos (Array Original). Um braço robótico (Iterador) lê a etiqueta de cada pacote (Propriedade 'tipo'). Se a etiqueta corresponder ao destino programado (Critério Recebido), o braço clona o pacote e o deposita em uma esteira secundária (Novo Array). A esteira principal continua operando sem perder seus pacotes originais (Imutabilidade).
 * * Fluxo Técnico de Execução:
 * 1. Entrada: Recebe uma estrutura de dados do tipo `Transacao[]` (o estado global bruto) e um parâmetro de tipagem estrita `TipoOperacao` (o critério de seleção).
 * 2. Alocação: Prepara um novo espaço na memória RAM (um array vazio ou a instância de um método funcional) para armazenar os resultados, garantindo a imutabilidade do argumento de entrada.
 * 3. Avaliação Sequencial: Itera sobre cada objeto do array de entrada. Em cada ciclo de repetição, aplica uma expressão booleana de igualdade estrita (===) comparando o valor da propriedade `tipo` do objeto atual com o critério recebido no parâmetro.
 * 4. Retorno: Devolve o novo array populado exclusivamente com as referências dos objetos que satisfizeram a avaliação booleana.
 */


// ============================================================================
// Função 2: calcularCustoMedio
// ============================================================================
/**
 * Contexto de Domínio: 
 * O preço médio de ativos financeiros não obedece a uma média aritmética simples, mas sim a uma média ponderada. O peso do cálculo é determinado pelo volume financeiro aportado em cada lote individual em relação à quantidade total de cotas em custódia.
 * * Fluxo Técnico de Execução:
 * 1. Entrada e Prevenção de Falhas: Recebe um array `Transacao[]` restrito apenas a operações de compra. Imediatamente verifica se o comprimento (length) deste array é zero. Caso seja, aplica um *Early Return* devolvendo `0` para evitar a quebra da execução matemática no final (que geraria um erro `NaN` por divisão por zero).
 * 2. Isolamento Léxico (Estado Interno): Declara duas variáveis acumuladoras numéricas no escopo local da função (iniciadas em 0): `quantidadeTotalAcumulada` e `volumeFinanceiroAcumulado`.
 * 3. Processamento de Lotes: Itera sobre o array recebido. Para cada objeto lido durante o laço:
 * - Calcula o total investido naquele lote específico (multiplicando a `quantidade` pelo `valorUnitario`) e soma o resultado ao `volumeFinanceiroAcumulado`.
 * - Adiciona a `quantidade` do lote atual à `quantidadeTotalAcumulada`.
 * 4. Retorno e Finalização: Ao terminar a varredura, realiza a divisão final do `volumeFinanceiroAcumulado` pela `quantidadeTotalAcumulada`. Retorna exclusivamente esse quociente como um valor do tipo `number`.
 */


// ============================================================================
// Função 3: consolidarCarteira
// ============================================================================
/**
 * Contexto de Domínio: 
 * Esta é a função Orquestradora (Controller) da camada lógica. Ela não executa operações matemáticas profundas ou triagens complexas diretamente. Seu papel é estabelecer o pipeline de dados: ela coordena o fluxo de informações injetando dados brutos nas funções utilitárias menores e mapeia o processamento final para o contrato visual exigido pelo sistema de saída.
 * * Fluxo Técnico de Execução:
 * 1. Entrada de Alta Camada: Recebe o banco de dados integral da corretora (`Transacao[]`) contendo todos os ativos misturados, além de uma string de busca com o identificador do ativo alvo (ex: 'ITSA4').
 * 2. Pipeline de Isolamento (Ativo): Executa uma triagem primária (com métodos nativos do JS) no banco de dados para reter apenas as transações cuja propriedade `ativo` corresponda ao parâmetro alvo (Recomendação: aplicar transformação para caixa alta (uppercase) em ambas as strings para garantir precisão e evitar erros por digitação de letras minúsculas).
 * 3. Pipeline de Isolamento (Operação): Invoca a `Função 1 (filtrarOperacoes)`, injetando como argumentos o array gerado no passo 2 e a string restrita 'COMPRA'. Armazena o array resultante em uma constante local no escopo léxico da orquestradora.
 * 4. Pipeline Matemático: Invoca a `Função 2 (calcularCustoMedio)`, injetando a constante retida no Passo 3. Armazena o valor numérico retornado em uma nova constante.
 * 5. Agregação de Estado Financeiro: Processa a soma bruta das quantidades de cotas presentes no array do Passo 3 para descobrir a quantidade total adquirida do ativo em questão. Em seguida, multiplica essa quantidade consolidada pelo custo médio descoberto no Passo 4 para determinar o valor total alocado financeiramente.
 * 6. Respeito ao Contrato (Type Safety): Constrói e retorna um objeto literal estruturado. O formato deste objeto deve aderir irrestritamente às chaves (`ativo`, `quantidadeTotal`, `custoMedio`, `totalInvestido`) e tipagens definidas na interface abstrata `RelatorioFinal` do módulo de Tipagem.
 */

import { RelatorioFinal, Transacao } from "./type";

export const filtrarOperacoes = (
  operacoes: Transacao[],
  tipoOperacao: "COMPRA" | "VENDA",
): Transacao[] => {
  return operacoes.filter((item) => {
    if (tipoOperacao === "COMPRA") {
      return item.transacao.compra === true
    }

    return item.transacao.venda === true
  })
}

export const calcularCustoMedio = (compras: Transacao[]): number => {
  if (compras.length === 0) {
    return 0
  }

  const quantidadeTotal = compras.reduce(
    (sum, item) => sum + item.quantidadeCotas,
    0,
  )

  if (quantidadeTotal === 0) {
    return 0
  }

  const volumeFinanceiro = compras.reduce(
    (sum, item) => sum + item.quantidadeCotas * item.precoPago,
    0,
  )

  return volumeFinanceiro / quantidadeTotal
}

export const consolidarCarteira = (
  transacoes: Transacao[],
  ativoAlvo: string,
): RelatorioFinal => {
  const ativoUpper = ativoAlvo.toUpperCase()

  const transacoesDoAtivo = transacoes.filter(
    (item) => item.nomeAtivo.toUpperCase() === ativoUpper,
  )

  const comprasDoAtivo = filtrarOperacoes(transacoesDoAtivo, "COMPRA")
  const custoMedio = calcularCustoMedio(comprasDoAtivo)
  const totalCotas = comprasDoAtivo.reduce(
    (sum, item) => sum + item.quantidadeCotas,
    0,
  )

  return {
    nomeAtivo: ativoUpper,
    totalCotas,
    custoMedio,
    totalInvestido: totalCotas * custoMedio,
  }
}
