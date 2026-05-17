// Define explicitamente o processamento do índice 0 de um array [cite: 7]
processPayrollRecord(payrollList[0]); // [cite: 7]
// Duplica a mesma função em memória alterando apenas o índice para 1 [cite: 7]
processPayrollRecord(payrollList[1]); // [cite: 7]
// Duplica novamente a função para o índice 2, ferindo o princípio DRY (Don't Repeat Yourself) [cite: 7]
processPayrollRecord(payrollList[2]); // [cite: 7]

// Inicia o bloco for definindo as três expressões de controle dentro dos parênteses [cite: 7]
// 1. let i = 0: Declara a variável controladora local 'i' iniciando no índice zero [cite: 7]
// 2. i < payrollList.length: Condição de execução; o loop roda enquanto 'i' for menor que o tamanho da lista [cite: 7]
// 3. i++: Operação de incremento; adiciona 1 a 'i' após cada execução completa do bloco interno [cite: 7]
for (let i = 0; i < payrollList.length; i++) { // [cite: 7]
  
  // Isola o registro atual baseado no índice iterador dinâmico [cite: 7]
  const currentRecord = payrollList[i]; // [cite: 7]
  
  // Passa o registro isolado para a função de processamento de folha [cite: 7]
  processPayrollRecord(currentRecord); // [cite: 7]

} // Chave de fechamento do bloco de iteração; o fluxo retorna para a avaliação da condição (passo 2) [cite: 7]

/**
 +---------------------+
           | 1. INITIALIZATION   |  (let i = 0)
           +---------+-----------+
                     |
                     v
           +---------+-----------+
      +--->| 2. CONDITION CHECK  |  (i < length)
      |    +---------+-----------+
      |              |
      |          (true)
      |              |
      |              v
      |    +---------+-----------+
      |    | 3. EXECUTE BLOCK    |  { process(data); }
      |    +---------+-----------+
      |              |
      |              v
      |    +---------+-----------+
      +----| 4. INCREMENT        |  (i++)
           +---------------------+
                     | (false)
                     v
           +---------------------+
           | 5. EXIT LOOP        |
           +---------------------+
 */

           //continuar após isso