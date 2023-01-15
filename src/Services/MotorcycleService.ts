import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle) {
    return new Motorcycle(motorcycle);
  }

  async createMotorcycle(motorcycle: IMotorcycle): Promise<Motorcycle> {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    const createDomainCar = this.createMotorcycleDomain(newMotorcycle);
    return createDomainCar;
  }
}