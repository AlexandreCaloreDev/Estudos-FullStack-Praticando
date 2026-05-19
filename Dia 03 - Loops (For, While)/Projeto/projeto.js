"use strict";
/**
 * Escopo: Algoritmo de Processamento em Lote de Folha de Pagamento. Você criará um script que simula a leitura de 50 registros de horas trabalhadas e aplica regras de negócio repetitivas
 
  Arquitetura e Fluxo Lógico (Sem código-fonte prático):

Mock de Dados: Defina um array estático com 50 objetos (use um loop básico para popular o array dinamicamente antes do processamento principal, se preferir). Cada objeto deve ter id, horasTrabalhadas e valorHora.

Variável Acumuladora: Fora do loop principal, declare um acumulador (let custoTotalFolha = 0) para somar os valores.

Processamento (O Loop Principal): Inicie um loop iterando sobre a coleção completa.

Regra de Negócio Interna: Dentro do loop, calcule salarioBase = horasTrabalhadas * valorHora. Se horasTrabalhadas > 160, calcule o excedente com um acréscimo de 50%.


Acumulação e Log: Some o valor calculado ao custoTotalFolha e imprima o status do ID atual.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var custoTotalFolha = 0;
var TOTAL_DE_REGISTROS = 50;
var MAXIMO_HORAS_TRABALHADAS = 160;
var folhaPonto = [];
function populaArray() {
    for (var i = 0; i < TOTAL_DE_REGISTROS; i++) {
        folhaPonto.push({ id: i + 1, horasTrabalhadas: (0, crypto_1.randomInt)(240), valorHora: (0, crypto_1.randomInt)(5, 50) });
    }
}
function calculaValorFolha() {
    var contador = 0;
    var salarioBase = 0;
    var custoTotalFolha = 0;
    while (contador < folhaPonto.length) {
        var registroAtual = folhaPonto[contador];
        if (registroAtual.horasTrabalhadas <= MAXIMO_HORAS_TRABALHADAS) {
            salarioBase = registroAtual.horasTrabalhadas * registroAtual.valorHora;
        }
        else {
            var valorExcedente = 0;
            valorExcedente = registroAtual.horasTrabalhadas - MAXIMO_HORAS_TRABALHADAS;
            salarioBase = (registroAtual.horasTrabalhadas * registroAtual.valorHora) + ((valorExcedente * registroAtual.valorHora) * 0.5);
        }
        custoTotalFolha = custoTotalFolha + salarioBase;
        console.log("ID ".concat(registroAtual.id, ": \n horas=").concat(registroAtual.horasTrabalhadas, ",\n valorHora=").concat(registroAtual.valorHora, ",\n salarioBase=").concat(salarioBase.toFixed(2)));
        salarioBase = 0;
        contador++;
    }
    console.log("\n custoTotalFolha=".concat(custoTotalFolha.toFixed(2)));
}
function main() {
    populaArray();
    calculaValorFolha();
}
main();
