/** O objetivo deste CLI é processar um volume de dados brutos e extrair inteligência (métricas) de forma previsível. A escolha de usar Arrow Functions Puras no motor de cálculos é a base dessa previsibilidade. Funções puras garantem que, dado um mesmo histórico de transações, o custo médio calculado será sempre idêntico, sem mutar o banco de dados original ou depender de variáveis externas. Isso elimina efeitos colaterais (side-effects) e torna cada função testável de forma isolada.

Arquitetura e Fluxo Lógico (Pseudo-código):  

Módulo de Tipagem (types.ts):

  Defina os contratos (Interfaces/Types) de entrada: o formato de uma Transacao e o formato do RelatorioFinal.

Módulo de Cálculos (engine.ts - Apenas Arrow Functions Puras):
*/

import { Transacao, RelatorioFinal } from "./type"
import * as calculos from "./engine"

const transacoes: Transacao[] = [
  {
    nomeAtivo: "ITSA4",
    transacao: { compra: true, venda: false },
    quantidadeCotas: 10,
    precoPago: 11.5,
    dataRealizada: "2026-05-20",
  },
  {
    nomeAtivo: "ITSA4",
    transacao: { compra: true, venda: false },
    quantidadeCotas: 5,
    precoPago: 12.0,
    dataRealizada: "2026-05-21",
  },
]

const relatorio: RelatorioFinal = calculos.consolidarCarteira(
  transacoes,
  "ITSA4",
)

console.log(relatorio)






