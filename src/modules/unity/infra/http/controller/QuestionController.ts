import { Request, Response } from 'express';
import { container } from 'tsyringe';

import QuestionService from '@modules/unity/services/Question';

export default class QuestionController {

  public async show(request: Request, response: Response): Promise<Response> {
    const { activity_id }  = request.params;

    const questionService = container.resolve(QuestionService);

    const questions = await questionService.execute({
      activity_id,
    });

    return response.json(questions);
  }

}
