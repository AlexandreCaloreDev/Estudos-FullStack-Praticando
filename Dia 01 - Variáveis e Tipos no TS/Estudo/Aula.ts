// Código Incorreto (JavaScript puro / Sem segurança de tipo):

// O interpretador JavaScript permite reatribuições catastróficas.
let totalPayroll = 5000; // Inicia como um número (number).
//totalPayroll = "Cinco mil";  É sobrescrito por texto (string). Falha silenciosa.


//Código Correto (TypeScript rigoroso):

// Declaração de uma variável mutável com tipagem estrita de número
let totalPayrollTS: number = 5000; 
/** let: palavra reservada indicando que a variável pode ser reatribuída.
    totalPayrollTS: identificador da variável usando padrão camelCase.
    : number: anotação de tipo estática do TypeScript. Exige um valor numérico.
    =: operador de atribuição, que guarda o valor na memória alocada.
    5000: o valor primitivo inserido na memória.
    ;: terminador de instrução.

    Tentativa de reatribuição incorreta (Gera erro de compilação imediatamente):
*/
    totalPayrollTS = "Cinco mil"; 
//  ^ O compilador TypeScript (tsc) bloqueará a execução ("Type 'string' is not assignable to type 'number'").

// Declaração de uma constante global
const COMPANY_NAME: string = "Grupo Calore";
/**
    const: palavra reservada indicando que o ponteiro de memória é imutável.
    COMPANY_NAME: identificador usando padrão SCREAMING_SNAKE_CASE.
    : string: anotação de tipo exigindo uma cadeia de caracteres de texto.
    =: operador de atribuição.
    "Grupo Calore": o texto em si, encapsulado por aspas duplas.
    ;: terminador de instrução.
*/

/*
+-----------------------+---------------------+
|      STACK MEMORY     |     COMPILADOR TS   |
+-----------+-----------+---------------------+
| Endereço  | Variável  | Validação de Tipo   |
+-----------+-----------+---------------------+
| 0x0001    | let x     | [ number ] ✅       | -> Guarda: 1500
| 0x0002    | const y   | [ string ] ✅       | -> Guarda: "Jhonnatan"
| 0x0003    | let z     | [ string ] ❌ ERRO  | -> Tenta guardar: 404 (Bloqueado)
+-----------+-----------+---------------------+
*/