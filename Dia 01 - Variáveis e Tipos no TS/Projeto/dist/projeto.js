"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline/promises"));
const process_1 = require("process");
let employeeDatabase = []; // estamos dizendo que o array é do tipo "EmployeeRecord", ou seja, somente vai receber aqueles tipos de dados definidos no type
const leitura = readline.createInterface({ input: process_1.stdin, output: process_1.stdout });
function salvarDados(estrutura) {
    return __awaiter(this, void 0, void 0, function* () {
        let contador = 0;
        let encerrarQuestionamentos = "N";
        do {
            let tmpname = yield leitura.question("Insira nome ");
            let tmpage = parseInt(yield leitura.question("Insira idade "));
            let tmpsalary = parseFloat(yield leitura.question("Insira o salário  "));
            estrutura.push({ name: tmpname, age: tmpage, salary: tmpsalary });
            console.log(`Funcionário cadastrado! \n ${estrutura[contador].name}, idade de: ${estrutura[contador].age}, e salario de ${estrutura[contador].salary} R$`);
            contador++;
            encerrarQuestionamentos = (yield leitura.question("Deseja encerrar os lançamentos? (S/N)")).toUpperCase();
        } while (encerrarQuestionamentos === "N");
        return estrutura;
    });
}
function leituraDados() {
    return __awaiter(this, void 0, void 0, function* () {
        const employeeResults = [];
        const novosDados = yield salvarDados(employeeResults);
        employeeDatabase.push(...novosDados);
        return employeeDatabase;
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield leituraDados();
            console.log("Aqui estão os dados cadastrados:");
            console.table(employeeDatabase);
            leitura.close();
        }
        catch (error) {
            console.log("Deu o seguinte erro:", error);
            leitura.close();
        }
    });
}
main();
