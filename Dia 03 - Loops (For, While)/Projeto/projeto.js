/**
 * Escopo: Algoritmo de Processamento em Lote de Folha de Pagamento. Você criará um script que simula a leitura de 50 registros de horas trabalhadas e aplica regras de negócio repetitivas
 
  Arquitetura e Fluxo Lógico (Sem código-fonte prático):

Mock de Dados: Defina um array estático com 50 objetos (use um loop básico para popular o array dinamicamente antes do processamento principal, se preferir). Cada objeto deve ter id, horasTrabalhadas e valorHora.

Variável Acumuladora: Fora do loop principal, declare um acumulador (let custoTotalFolha = 0) para somar os valores.

Processamento (O Loop Principal): Inicie um loop iterando sobre a coleção completa.

Regra de Negócio Interna: Dentro do loop, calcule salarioBase = horasTrabalhadas * valorHora. Se horasTrabalhadas > 160, calcule o excedente com um acréscimo de 50%.


Acumulação e Log: Some o valor calculado ao custoTotalFolha e imprima o status do ID atual.
 */
import { randomInt } from "crypto";
let custoTotalFolha = 0;
const TOTAL_DE_REGISTROS = 50;
const MAXIMO_HORAS_TRABALHADAS = 160;
const folhaPonto = [];
function populaArray() {
    for (let i = 0; i < TOTAL_DE_REGISTROS; i++) {
        folhaPonto.push({ id: i + 1, horasTrabalhadas: randomInt(240), valorHora: randomInt(5, 50) });
    }
}
function calculaValorFolha() {
    let contador = 0;
    let salarioBase = 0;
    let custoTotalFolha = 0;
    while (contador < folhaPonto.length) {
        let registroAtual = folhaPonto[contador];
        if (registroAtual.horasTrabalhadas <= MAXIMO_HORAS_TRABALHADAS) {
            salarioBase = registroAtual.horasTrabalhadas * registroAtual.valorHora;
        }
        else {
            let valorExcedente = 0;
            valorExcedente = registroAtual.horasTrabalhadas - MAXIMO_HORAS_TRABALHADAS;
            salarioBase = (registroAtual.horasTrabalhadas * registroAtual.valorHora) + ((valorExcedente * registroAtual.valorHora) * 0.5);
        }
        custoTotalFolha = custoTotalFolha + salarioBase;
        console.log(`ID ${registroAtual.id}: \n horas=${registroAtual.horasTrabalhadas},\n valorHora=${registroAtual.valorHora},\n salarioBase=${salarioBase.toFixed(2)}`);
        salarioBase = 0;
        contador++;
    }
    console.log(`\n custoTotalFolha=${custoTotalFolha.toFixed(2)}`);
}
function main() {
    populaArray();
    calculaValorFolha();
}
main();
