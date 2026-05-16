"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline/promises");
var process_1 = require("process");
var employeeDatabase = []; // estamos dizendo que o array é do tipo "EmployeeRecord", ou seja, somente vai receber aqueles tipos de dados definidos no type
var leitura = readline.createInterface({ input: process_1.stdin, output: process_1.stdout });
function salvarDados(estrutura) {
    return __awaiter(this, void 0, void 0, function () {
        var contador, encerrarQuestionamentos, tmpname, tmpage, _a, tmpsalary, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    contador = 0;
                    encerrarQuestionamentos = "N";
                    _c.label = 1;
                case 1: return [4 /*yield*/, leitura.question("Insira nome ")];
                case 2:
                    tmpname = _c.sent();
                    _a = parseInt;
                    return [4 /*yield*/, leitura.question("Insira idade ")];
                case 3:
                    tmpage = _a.apply(void 0, [_c.sent()]);
                    _b = parseFloat;
                    return [4 /*yield*/, leitura.question("Insira o salário  ")];
                case 4:
                    tmpsalary = _b.apply(void 0, [_c.sent()]);
                    estrutura.push({ name: tmpname, age: tmpage, salary: tmpsalary });
                    console.log("Funcion\u00E1rio cadastrado! \n ".concat(estrutura[contador].name, ", idade de: ").concat(estrutura[contador].age, ", e salario de ").concat(estrutura[contador].salary, " R$"));
                    contador++;
                    return [4 /*yield*/, leitura.question("Deseja encerrar os lançamentos? (S/N)")];
                case 5:
                    encerrarQuestionamentos = (_c.sent()).toUpperCase();
                    _c.label = 6;
                case 6:
                    if (encerrarQuestionamentos === "N") return [3 /*break*/, 1];
                    _c.label = 7;
                case 7:
                    {
                        return [2 /*return*/, estrutura];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function leituraDados() {
    return __awaiter(this, void 0, void 0, function () {
        var employeeResults, novosDados;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    employeeResults = [];
                    return [4 /*yield*/, salvarDados(employeeResults)];
                case 1:
                    novosDados = _a.sent();
                    employeeDatabase.push.apply(employeeDatabase, novosDados);
                    return [2 /*return*/, employeeDatabase];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, leituraDados()];
                case 1:
                    _a.sent();
                    console.log("Aqui estão os dados cadastrados:");
                    console.table(employeeDatabase);
                    leitura.close();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log("Deu o seguinte erro:", error_1);
                    leitura.close();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
main();
