/**
 Crie um array simples com os nomes dos seus colegas (["Murilo", "Geovanni", "Jhonnatan"]). Escreva um loop while que utilize um iterador manual (let i = 0) para fazer um console.log de cada nome, e lembre-se de incrementar a variável dentro do bloco para evitar um loop infinito.
 */
var nomeColegas = ["Murilo", "Geovanni", "Jhonnatan"];
var i = 0;
while (i < nomeColegas.length) {
    console.log("Nome do colega: ".concat(nomeColegas[i]));
    i++;
}
