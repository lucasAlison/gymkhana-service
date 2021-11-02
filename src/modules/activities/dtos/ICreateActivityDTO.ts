export default interface ICreateActivityDTO {
  name: string;
  note: string;
  type: string;
  token: string;
  latitude: number;
  longitude: number;
  radius: number;
  points: number;
  time: number;
  typeTracking: string;
  urlTracking: string;
  assetNameTracking: string;
}
