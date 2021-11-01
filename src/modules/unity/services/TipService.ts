import { injectable, inject } from 'tsyringe';

@injectable()
class TipService {
  constructor(
  ) {}

  public async execute(): Promise<Object> {
    const tips =
      {
        id: 0,
        title: "Grave a dica",
        subtitle: "Procure por imagens de um baú",
        body: "Sou uma estrutura de repetição. Quem sou eu?"
      };
    return tips;
  }
}

export default TipService;
