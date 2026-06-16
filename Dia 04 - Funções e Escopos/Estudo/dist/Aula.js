"use strict";
// ============================================================================
// ERRADO: Vazamento de escopo, lógica acoplada e falta de tipagem estrita
// ============================================================================
Object.defineProperty(exports, "__esModule", { value: true });
// A variável global é declarada fora de qualquer bloco.
// Qualquer parte do sistema pode alterar isso, gerando instabilidade.
let taxaImposto = 0.15;
// A função não declara os tipos dos parâmetros (implicitly 'any').
// A engine do TS não consegue prever o que entra nem o que sai.
function calcularTributo(valor) {
    // Variável 'resultado' está no escopo local, mas depende de estado global.
    let resultado = valor * taxaImposto;
    return resultado;
}
// ============================================================================
// CERTO: Isolamento, Arrow Function e Tipagem Estrita
// ============================================================================
// Usamos uma Arrow Function atribuída a uma constante para evitar o hoisting
// (içamento acidental da função) e fixar o contexto léxico do 'this'.
// Tipamos o parâmetro (valorAtivo: number) e o retorno (: number).
const calcularTributoModular = (valorAtivo, taxa) => {
    // O bloco interno inicia.
    // 'tributoCalculado' é restrita ao escopo léxico desta função.
    // Ela não existe na memória antes da linha abaixo e desaparece após o 'return'.
    const tributoCalculado = valorAtivo * taxa;
    // Devolvemos apenas o processamento numérico puro.
    return tributoCalculado;
}; // O bloco termina.
/**
 *
 * [ MEMÓRIA GLOBAL ]
  |-- (Acessível por todos, usar com extrema moderação)
  |-- const appVersion = '1.0.0'
  |
  +-- [ ESCOPO DE FUNÇÃO: calcularTotal() ]
        |-- (Isolado. Dados nascem e morrem aqui)
        |-- parâmetro: valor (recebe cópia ou referência)
        |-- var local: taxaProcessamento
        |
        +-- [ ESCOPO DE BLOCO: if (valor > 100) { ... } ]
              |-- (Ainda mais restrito)
              |-- const descontoAplicado
              |-- // Só existe dentro do 'if'
 */ 
