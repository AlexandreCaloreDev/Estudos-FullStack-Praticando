/**
 * Este arquivo é o contrato estrito do sistema. Ele define a forma dos dados que entram e que saem, garantindo que o motor não processe "lixo".

Entrada (Transacao): Imagine que você tem um array de objetos representando o histórico de uma corretora. Cada objeto deve possuir obrigatoriamente: o nome do ativo (ex: 'ITSA4', 'XPML11'), o tipo da operação (restrito a 'COMPRA' ou 'VENDA'), a quantidade de cotas adquiridas, o preço pago por cota naquele momento e a data da operação.

Saída (RelatorioFinal): O formato exato que será impresso no terminal no fim do dia. Deve conter o nome do ativo consolidado, a quantidade total atual de cotas na carteira, o custo médio ponderado e o total em dinheiro alocado naquele ativo.
 */
export type Transacao = {
  nomeAtivo : string,
  transacao : {
    compra : boolean,
    venda : boolean
  },
  quantidadeCotas : number,
  precoPago : number,
  dataRealizada: string
}


export interface RelatorioFinal {
  nomeAtivo: string,
  totalCotas: number,
  custoMedio : number
  totalInvestido : number
}