Construção "na unha" de um motor de folha de pagamento de terminal simulando entidades do domínio. Você não fará UI (frontend) nem banco de dados. Focará estritamente na lógica do Domínio (Clean Architecture).

Módulos Requeridos (Arquitetura Proposta):

Entidade Interface (IPayable ou Remuneravel): Contrato que exige um método que retorna o valor do pagamento final.

Entidade Classe Abstrata (Funcionario): Base estrutural. Contém propriedades base (nome, documento, salarioBase) e obriga classes filhas a definir um bônus específico.

Entidade Subclasse (Desenvolvedor e Gerente): Estendem (extends) o funcionário e implementam (implements) o contrato de pagamento. Definem o bônus isolado.

Fluxo Lógico e Pseudo-código (Não Copie - Programe na Unha)
Crie o arquivo das Interfaces. Declare a interface que exige um método de calcular o salário.

Crie a classe base de Funcionário. Ela não deve ser instanciada diretamente (pesquise abstract class).

Crie as classes filhas. Ao instanciar um Gerente, o construtor deve invocar super() para preencher os dados na classe pai.

O Gerente tem bônus de 20%, o Desenvolvedor tem bônus fixo.

Crie uma classe de infraestrutura ou serviço chamada FolhaDePagamento.

Crie um método que receba um array do tipo Funcionario[] e faça um loop em todos, executando a função de cálculo.

