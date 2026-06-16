/**
  Escopo: CLI (Command Line Interface) de Verificação de Permissões de um Escritório.
  O sistema fará perguntas ao usuário no terminal, avaliará os inputs através de fluxos de condicionais e retornará o departamento que ele tem acesso e as ações permitidas.

  Arquitetura e Fluxo Lógico (Sem Código Fonte):

  Entrada de Dados: Utilizar o módulo nativo readline do Node.js para capturar dados do terminal em sequência.

  Variáveis de Estado: Você precisará armazenar nomeUsuario, idadeUsuario (convertido para número) e codigoCargo (ex: 1 para Estagiário, 2 para Analista, 3 para Gerente).

  Processamento Lógico (Bifurcação):

  Condicional 1 (Idade): Se a idade for menor que 18 e o cargo for diferente de Estagiário, exibir erro de consistência contratual e abortar (process.exit()).

  Condicional 2 (Cargo - Switch Statement): Usar a estrutura switch (codigoCargo) para mapear as áreas de acesso.

  case 1: Acesso à digitação de notas e arquivos.
  case 2: Acesso ao sistema de folha de pagamento e relatórios de impostos.
  case 3: Acesso irrestrito + permissão de assinatura digital.

  default: Cargo não reconhecido.
 */
import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "node:process";
const IDADE_LEGAL = 18;
const ID_ESTAGIO = 1;
let tipoCargo;
tipoCargo = [
    { id: 1, nomeCargo: "Estagiario" },
    { id: 2, nomeCargo: "Junior" },
    { id: 3, nomeCargo: "Coordenador" },
    { id: 4, nomeCargo: "Gerente" },
    { id: 5, nomeCargo: "CTO" }
];
let nomeUsuario;
let idadeUsuario;
let codigoCargo;
const resposta = readline.createInterface({ input, output });
async function dadosIniciais() {
    nomeUsuario = await resposta.question("Nome do usuário: ");
    idadeUsuario = parseInt(await resposta.question("Idade do usuário: "));
    console.table(tipoCargo);
    codigoCargo = parseInt(await resposta.question("id do cargo: "));
}
async function verificaUsuario(idade, cargo) {
    if (idade < IDADE_LEGAL && cargo !== ID_ESTAGIO) {
        throw new Error("Erro de consistência contratual");
    }
}
async function VerificaAcesso(idcargo) {
    switch (idcargo) {
        case 1:
            console.log('\n Acesso à digitação de notas e arquivos');
            break;
        case 2:
            console.log('\n Acesso ao sistema de folha de pagamento e relatórios de impostos.');
            break;
        case 3:
            console.log('\n Acesso irrestrito + permissão de assinatura digital.');
            break;
        case 4:
            console.log('\n Acesso irrestrito + permissão de assinatura digital, exclusão de arquivos.');
            break;
        case 5:
            console.log('\n Acesso irrestrito + permissão de assinatura digital, exclusão de arquivos e divulgação de dados');
            break;
        default:
            console.log('\n Cargo não reconhecido');
            break;
    }
}
async function main() {
    try {
        await dadosIniciais();
        await verificaUsuario(idadeUsuario, codigoCargo);
        await VerificaAcesso(codigoCargo);
        resposta.close();
    }
    catch (error) {
        console.log(`deu esse erro aqui ${error}`);
        resposta.close();
    }
}
await main();
