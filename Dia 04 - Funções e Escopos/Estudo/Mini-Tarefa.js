//*Escreva na sua IDE uma Arrow Function chamada processarLote que receba um array de números (valores brutos) e uma string (nome do lote). A função deve retornar o valor total somado (number). Tipos e retornos devem ser explícitos. Não cole código de lugar nenhum, digite. */
var valoresBrutos = Array.from({ length: 10 }, function () {
    return Math.floor(Math.random() * (20 - 0 + 1)) + 0;
});
var lote = "Loteamento público";
var processarLote = function (valoresBrutos, lote) {
    var totalSoma = 0;
    console.log(valoresBrutos);
    for (var i = 0; i < valoresBrutos.length; i++) {
        totalSoma += valoresBrutos[i];
    }
    return totalSoma;
};
console.log(" o valor \u00E9 de ".concat(processarLote(valoresBrutos, lote)));
