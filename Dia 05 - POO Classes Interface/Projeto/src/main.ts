import { Desenvolvedor } from "./models/desenvolvedor.js";
import { Funcionario } from "./models/funcionario.js";
import { Gerente } from "./models/gerente.js";
import { FolhaDePagamento } from "./service/FolhaDePagamento.js";

const alex    = new Desenvolvedor(
    'Alex da Silva',
    'programador JR',
    '49801204579',
    2500,
    0.1)
const larissa = new Gerente(
    'Alex da Silva',
    'programador JR',
    '49801204579',
    6600.64)

const calculadora = new FolhaDePagamento

const quadroFuncionarios : Funcionario[] = [alex, larissa]

let somaTotalFolhaPagamento : number = 0

somaTotalFolhaPagamento = calculadora.calculaFolhaDePagamento(quadroFuncionarios)