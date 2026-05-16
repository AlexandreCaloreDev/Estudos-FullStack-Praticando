/**
 Declare uma variável const contendo seu cargo atual, e uma variável let contendo seus anos de experiência (number). Atualize a variável let adicionando +1 à sua experiência. Execute o compilador (tsc sandbox.ts) para confirmar a ausência de erros.
 */

 const cargoAtual    : string = "Programador"
 let anosExperiencia : number = 1
 console.log(`Você trabalha como ${cargoAtual} e tem um total de ${anosExperiencia} anos na área`)

 anosExperiencia = 2
 console.log(`Você trabalha como ${cargoAtual} e tem um total de ${anosExperiencia} anos na área`)
 anosExperiencia = 3
 console.log(`Você trabalha como ${cargoAtual} e tem um total de ${anosExperiencia} anos na área`)

 /**
  Resultado:

  Você trabalha como Programador e tem um total de 1 anos na área
  Você trabalha como Programador e tem um total de 2 anos na área
  Você trabalha como Programador e tem um total de 3 anos na área
 */