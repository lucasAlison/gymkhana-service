import { injectable, inject } from 'tsyringe';

@injectable()
class LevelService {
  constructor(
  ) {}

  public async execute(): Promise<Object> {
    const levels =
      {
        id: 0,
        levelName: "Level 1",
        sceneSequence: ["Tip","Tracking","Question"],
        tipId: 0,
        questionId: 0,
        trackingId: 0
      };
    return levels;
  }
}

export default LevelService;
