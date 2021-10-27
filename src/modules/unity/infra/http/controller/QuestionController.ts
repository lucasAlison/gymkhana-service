import { Request, Response } from 'express';
import { container } from 'tsyringe';

import QuestionService from '@modules/unity/services/Question';

export default class QuestionController {

  public async index(request: Request, response: Response): Promise<Response> {
    const questionService = container.resolve(QuestionService);

    const questions = await questionService.execute();

    return response.json(questions);
  }

}
