import { injectable, inject } from 'tsyringe';

@injectable()
class QuestionService {
  constructor(
  ) {}

  public async execute(): Promise<Object> {
    const questions = 
    {
      id: 0,
      text: "Sou utilizado quando você precisa repetir várias vezes um ou mais comandos. Dependendo da situação, posso não ser executado. Não sei quantas repetições serão executadas.",
      options: [
        {
          text: "Para...faça (for)",
          correction: "Ops. A estrutura para...faça (for) tem comportamento de repetição de "+
                    "um bloco de sentenças por um número específico de interações. "+
                    "Um para...faça sempre está acompanhado de uma variável contadora que "+
                    "armazena quantas vezes o bloco de sentenças da estrutura de repetição "+
                    "deve ser executada.",
          isCorrect: false
        },
        {
          text: "Enquanto...faça (while)",
          correction: "Parabéns! Você acertou! O enquanto...faça (while) é a estrutura de "+
                      "repetição mais simples. Ele repete a execução de um bloco de sentenças "+
                    "enquanto uma condição permanecer verdadeira. Na primeira vez que a "+
                    "condição se tornar falsa, o while não repetirá a execução do bloco. "+
                    "Pode acontecer de não ser executada.",
          isCorrect: true
        },
        {
          text: "Faça...enquanto (do while)",
          correction: "Ops! A estrutura faça...enquanto (do while) tem o comportamento de "+
                    "repetição de comandos, porém a condição é verificada após executar o "+
                    "bloco de instruções correspondente. Ou seja, é necessário rodar os "+
                    "comandos pelo menos uma vez para realizar a verificação da condição.",
          isCorrect: false
        }
      ]
    };
    return questions;
  }
}

export default QuestionService;
