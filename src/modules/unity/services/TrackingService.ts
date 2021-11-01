import { injectable, inject } from 'tsyringe';

@injectable()
class TrackingService {
  constructor(
  ) {}

  public async execute(): Promise<Object[]> {
    const trackings = [
      {
        id: 0,
        type: "image",
        url: "http://167.99.237.34/files/chest.wtc",
        assetName: "Chest"
      }
    ];
    return trackings;
  }
}

export default TrackingService;
