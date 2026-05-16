var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
let employeeDatabase = []; // estamos dizendo que o array é do tipo "EmployeeRecord", ou seja, somente vai receber aqueles tipos de dados definidos no type
const leitura = readline.createInterface({ input, output });
function salvarDados(estrutura) {
    return __awaiter(this, void 0, void 0, function* () {
        let contador = 0;
        let encerrarQuestionamentos = "N";
        do {
        } while (encerrarQuestionamentos = "N");
        {
            let tmpname = yield leitura.question("Insira nome ");
            let tmpage = parseInt(yield leitura.question("Insira idade "));
            let tmpsalary = parseFloat(yield leitura.question("Insira o salário  "));
            estrutura.push({ name: tmpname, age: tmpage, salary: tmpsalary });
            console.log(`Funcionário cadastrado! \n ${estrutura[contador].name}, idade de: ${estrutura[contador].age}, e salario de ${estrutura[contador].salary} R$`);
            contador++;
            encerrarQuestionamentos = (yield leitura.question("Deseja encerrar os lançamentos? (S/N)")).toUpperCase();
        }
        return estrutura[contador];
    });
}
function leituraDados() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const employeeResults = [];
            try {
                employeeDatabase.push(yield salvarDados(employeeResults));
                resolve(employeeDatabase);
                leitura.close();
            }
            catch (error) {
                reject(error);
                leitura.close();
            }
        }));
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield leituraDados();
            leitura.close();
        }
        catch (error) {
            console.log("Deu o seguinte erro:", error);
            leitura.close();
        }
    });
}
main();
