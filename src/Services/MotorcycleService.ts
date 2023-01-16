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

  async getAll() {
    const motorcycleODM = new MotorcycleODM();
    const allMotorcycles = await motorcycleODM.findAll();
    return allMotorcycles.map((motorcycle) => {
      const newMotorcycle = this.createMotorcycleDomain(motorcycle);
      return newMotorcycle;
    });
  }

  async getById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.findById(id);
    if (motorcycle) {
      const newMotorcycle = this.createMotorcycleDomain(motorcycle);
      return newMotorcycle;
    }
    return motorcycle;
  }

  async updateById(id: string, car: IMotorcycle) {
    const carODM = new MotorcycleODM();
    const motorcycle = await carODM.updateById(id, car);
    if (motorcycle) {
      const updatedMotorcycle = this.createMotorcycleDomain(motorcycle);
      return updatedMotorcycle;
    }
    return motorcycle;
  }
}