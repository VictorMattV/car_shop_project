export default interface IVehicle {
  _id?: string;
  id?: string;
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
}