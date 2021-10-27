import { injectable, inject } from 'tsyringe';

@injectable()
class LevelService {
  constructor(
  ) {}

  public async execute(): Promise<Object[]> {
    const levels = [
      {
        id: 0,
        levelName: "Level 1",
        sceneSequence: ["Tip","Tracking","Question","ChestReward"],
        tipId: 0,
        questionId: 0,
        trackingId: 0
      },
      {
        id: 1,
        levelName: "Level 2",
        sceneSequence: ["Tip","Tracking","Question","ChestReward"],
        tipId: 1,
        questionId: 0,
        trackingId: 1
      }
    ];
    return levels;
  }
}

export default LevelService;
