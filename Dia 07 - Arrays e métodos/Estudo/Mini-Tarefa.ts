​// Filtre apenas os números pares (utilize o operador módulo %).
​// Mapeie os números resultantes para uma string no formato: "Número X"

const numbers  : number [] = [1,2,3,4,5,6,7] 

const numbersFormatted : string[] = numbers
.filter((num) => num % 2 === 0 ).map((num) =>`Número ${num}`)

console.log(numbersFormatted);
