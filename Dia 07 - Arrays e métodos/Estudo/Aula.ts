// jeito errado de se trabalhar com arrays 

const fiis = [{ ticker: "MXRF11", yield: 12 }, { ticker: "HGLG11", yield: 8 }];
const highYieldFiis = []; // Inicialização de array vazio para receber dados sofrendo mutação

for (let i = 0; i < fiis.length; i++) { // Controle manual de índices propenso a erros (off-by-one)
  if (fiis[i].yield > 10) { 
    highYieldFiis.push(fiis[i].ticker); // Mutação do array externo e lógica acoplada
  }
}

// jeito correto de se trabalhar

// Define uma interface estrita para o formato de entrada garantindo tipagem
interface FiiData {
  ticker: string;
  yield: number;
}

// Declara uma variável constante (const) imutável com um array de objetos tipados
const fiis: FiiData[] = [
  // Abre objeto: as chaves {} demarcam um bloco de dados na memória
  { ticker: "MXRF11", yield: 12 }, 
  { ticker: "HGLG11", yield: 8 }
]; // Fecha o array com colchetes []

// Encadeia os métodos para gerar o resultado final, gravando na variável constante
const highYieldTickers: string[] = fiis
  // Chama a função .filter(). O parêntese () executa a função.
  // Dentro, uma arrow function 'fii => fii.yield > 10' atua como parâmetro.
  .filter((fii) => fii.yield > 10) // Retorna um novo array contendo apenas MXRF11
  // Encadeia imediatamente o .map() no novo array retornado pelo filter
  .map((fii) => fii.ticker); // Transforma o objeto { ticker: "MXRF11", ... } apenas na string "MXRF11"

/*
[ ARRAY ORIGINAL (fiis) ] -> Permanece imutável
Index 0: { ticker: "MXRF11", yield: 12 }
Index 1: { ticker: "HGLG11", yield: 8 }

       |
       v  .filter(fii => fii.yield > 10)
       |
[ ARRAY INTERMEDIÁRIO ] -> Novo espaço alocado na memória RAM
Index 0: { ticker: "MXRF11", yield: 12 } 
(HGLG11 foi rejeitado pelo critério)

       |
       v  .map(fii => fii.ticker)
       |
[ ARRAY FINAL (highYieldTickers) ] -> Retornado e armazenado
Index 0: "MXRF11"
*/