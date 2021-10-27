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
        url: "http://192.168.3.8:5000/files/tracking/chest.wtc",
        assetName: "Chest"
      },
      {
        id: 1,
        type: "object",
        url: "http://192.168.3.8:5000/files/tracking/room.wto",
        assetName: "Chest"
      }
    ];
    return trackings;
  }
}

export default TrackingService;
