// ANTES: Condicionais aninhadas dificultam a leitura (Anti-pattern).
function processarFolha(usuarioLogado: string, isAprovado: boolean) {
    if (usuarioLogado === "Contador") {
        if (isAprovado === true) {
            console.log("Processando folha...");
        } else {
            console.log("Aguardando aprovação.");
        }
    } else {
        console.log("Acesso negado.");
    }
}

// DEPOIS: Guard Clauses (Early Return) e tipagem estrita.

// A palavra reservada 'function' declara uma função nomeada no escopo.
function validarAcesso(
    // 'cargo' é o nome do parâmetro. ':' define o tipo. 'string' é o tipo esperado.
    cargo: string, 
    // 'idade' é o segundo parâmetro do tipo numérico.
    idade: number
// ')' fecha os parâmetros. ':' inicia o tipo de retorno. 'void' indica que não retorna nada.
): void { 

    // 'if' é a palavra-chave que inicia a avaliação condicional.
    // '(' abre a expressão lógica que será avaliada.
    // 'cargo' é a variável sendo lida.
    // '!==' é o operador de desigualdade estrita (compara valor e tipo).
    // '"Admin"' é a string literal de comparação.
    // ')' fecha a expressão lógica.
    if (cargo !== "Admin") {
        
        // '{' abre o bloco de escopo léxico que será executado se a condição for TRUE.
        console.log("Acesso Negado: Privilégios insuficientes.");
        
        // 'return' encerra a execução da função imediatamente. O código abaixo não roda.
        return;
        
    // '}' fecha o bloco de escopo do 'if'.
    }

    // Se o código chegou até aqui, o compilador TS tem certeza (Narrowing) que o cargo é Admin.
    
    // Novo 'if' avaliando outra expressão. Operador '<' verifica se é menor.
    if (idade < 18) {
        console.log("Acesso Negado: Idade mínima não atingida.");
        return;
    }

    // Execução final. Este bloco representa a "porta aberta".
    console.log("Acesso Liberado aos servidores internos.");
    
// '}' fecha o escopo da função.
}

/**
 [Início da Execução]
       |
       v
(Avaliação de Memória: cargo === "Admin" ?)
       |
       +-----------------------+
       |                       |
     [TRUE]                  [FALSE]
       |                       |
       v                       v
 { Abre Escopo }        [ Ignora Bloco ]
 [ Executa Lógica ]            |
 { Fecha Escopo }              |
       |                       |
       +-----------------------+
       |
       v
[Continua Fluxo Restante]
 */