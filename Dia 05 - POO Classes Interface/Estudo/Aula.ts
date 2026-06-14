// Errado:

// Não há garantia de que 'employee' possui a propriedade 'role'.
// Erro em tempo de execução se 'role' for undefined.
function printRole(employee: any) {
  console.log(employee.role.name);
}


// Correto

// 'interface' é a palavra reservada para criar o contrato estrutural.
// 'Role' é o identificador em PascalCase.
// '{' abre o escopo de obrigatoriedades da interface.
interface Role {
  // 'name' é a chave da propriedade.
  // ':' separa a chave de sua tipagem.
  // 'string' exige que o valor inserido nesta chave seja texto.
  // ';' encerra a declaração desta linha.
  name: string;
// '}' fecha o bloco do contrato.
}

// 'interface' define o contrato secundário.
interface EmployeeContract {
  // Define que a propriedade 'role' deve obrigatoriamente seguir a interface 'Role' acima.
  role: Role;
  // 'work' é o nome do método.
  // '()' indica que é uma função e define os parâmetros esperados (nenhum, neste caso).
  // ':' após os parênteses define o tipo do retorno do método.
  // 'void' indica que a função executa uma ação mas não retorna dados.
  work(): void;
}

// 'class' inicia a declaração do molde operacional.
// 'Developer' é o identificador.
// 'implements' obriga a classe a possuir tudo que o contrato a seguir exige.
// 'EmployeeContract' é a interface sendo respeitada.
// '{' abre o escopo onde o estado e o comportamento existirão.
class Developer implements EmployeeContract {
  // 'role' é a implementação obrigatória pedida na interface.
  // O tipo é explicitado novamente como 'Role'.
  role: Role;

  // 'constructor' é o método invocado automaticamente ao instanciar a classe com 'new'.
  // Ele recebe os parâmetros iniciais para configurar o estado do objeto.
  constructor(roleParam: Role) {
    // 'this' refere-se à instância específica que está sendo criada na memória.
    // '.role' acessa a propriedade desta instância.
    // '=' atribui o valor recebido no parâmetro 'roleParam' à propriedade interna.
    this.role = roleParam;
  }

  // Implementação obrigatória do método definido na interface.
  work(): void {
    // Acessa o estado interno (this.role.name) para operar regras de negócio.
    console.log("Writing code as " + this.role.name);
  }
// '}' encerra o molde da classe.
}

/**
 * [TEMPO DE COMPILAÇÃO - TIPAGEM ESTRITA]
   (Contrato)              (Contrato Base)
   Interface: Role         Interface: Employee
      │                       ▲
      │                       │ implements
      ▼                       │
[TEMPO DE EXECUÇÃO - CLASSE BASE]
   Class: Person (Base de Dados Gerais)
      ▲
      │ extends (Herda estado e comportamento)
      │
   Class: Developer (Molde Concreto) ───► memory heap allocation (new Developer()) 
*/ 