import * as readline from "readline/promises"
import { stdin as input, stdout as output } from "process"

/**
  Projeto: Sistema CLI de Cadastro em Memória (Employee Registration)
  Escopo (4h): Um script em linha de comando (Node.js) que recebe inputs de texto do usuário (via terminal), valida os tipos (Nome, Idade, Salário Base) e salva as informações estritamente tipadas em um Array local. 
 */

type EmployeeRecord = {
  name: string,
  age: number,
  salary: number
} // defini todos os tipos de dados que o objeto vai receber

type Loop = "S" | "N"

let employeeDatabase: EmployeeRecord[] = [] // estamos dizendo que o array é do tipo "EmployeeRecord", ou seja, somente vai receber aqueles tipos de dados definidos no type

const leitura = readline.createInterface({ input, output })

async function salvarDados(estrutura: EmployeeRecord[]): Promise<EmployeeRecord[]> {
  let contador: number = 0
  let encerrarQuestionamentos: Loop = "N"

  do {
    let tmpname: string = await leitura.question("Insira nome ")
    let tmpage: number = parseInt(await leitura.question("Insira idade "))
    let tmpsalary: number = parseFloat(await leitura.question("Insira o salário  "))

    estrutura.push({ name: tmpname, age: tmpage, salary: tmpsalary })

    console.log(`Funcionário cadastrado! \n ${estrutura[contador].name}, idade de: ${estrutura[contador].age}, e salario de ${estrutura[contador].salary} R$`)

    contador++

    encerrarQuestionamentos = (await leitura.question("Deseja encerrar os lançamentos? (S/N)")).toUpperCase() as Loop
  } while (encerrarQuestionamentos === "N") {
    return estrutura
  }
}


async function leituraDados(): Promise<EmployeeRecord[]> {
  const employeeResults: EmployeeRecord[] = []
  const novosDados = await salvarDados(employeeResults)
  employeeDatabase.push(...novosDados)
  return employeeDatabase
}

async function main() {
  try {
    await leituraDados()
    console.log("Aqui estão os dados cadastrados:")
    console.table(employeeDatabase)
    leitura.close()
  }
  catch (error) {
    console.log("Deu o seguinte erro:", error)
    leitura.close()
  }
}

main()