import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcylce: IMotorcycle) {
    super(motorcylce);
    this.category = motorcylce.category;
    this.engineCapacity = motorcylce.engineCapacity;
  }
}