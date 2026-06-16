"use strict";
//*Escreva na sua IDE uma Arrow Function chamada processarLote que receba um array de números (valores brutos) e uma string (nome do lote). A função deve retornar o valor total somado (number). Tipos e retornos devem ser explícitos. Não cole código de lugar nenhum, digite. */
Object.defineProperty(exports, "__esModule", { value: true });
const valoresBrutos = Array.from({ length: 10 }, () => {
    return Math.floor(Math.random() * (20 - 0 + 1)) + 0;
});
const lote = "Loteamento público";
const processarLote = (valoresBrutos, lote) => {
    let totalSoma = 0;
    console.log(valoresBrutos);
    for (let i = 0; i < valoresBrutos.length; i++) {
        totalSoma += valoresBrutos[i];
    }
    return totalSoma;
};
console.log(` o valor é de ${processarLote(valoresBrutos, lote)}`);
