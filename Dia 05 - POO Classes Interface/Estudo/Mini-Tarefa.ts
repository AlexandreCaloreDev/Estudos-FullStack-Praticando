/**
 * Na sua IDE vazia, sem copiar o código acima:

  Declare uma interface Task com duas propriedades: title (texto) e isCompleted (booleano).

  Declare uma classe SupportTicket que implementa (implements) a interface Task.

  Crie um construtor que exija o title na hora de instanciar e defina o isCompleted sempre como falso por padrão.

 */

interface Task {
  title: string,
  isCompleted: boolean
}

class SupportTicket implements Task {
  title = ""
  isCompleted = false;

  constructor(titulo: string) {
    if (titulo.trim() === "") {
      throw new Error("Obrigatório informar o título.")
    }

    this.title = titulo;
    this.isCompleted = false;
  }
}