import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar) {
    return new Car(car);
  }

  async createCar(car: ICar): Promise<Car> {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    const createDomainCar = this.createCarDomain(newCar);
    return createDomainCar;
  }

  async getAll() {
    const carODM = new CarODM();
    const allCars = await carODM.findAll();
    return allCars.map((car) => {
      const newCar = this.createCarDomain(car);
      return newCar;
    });
  }

  async getById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    if (car) {
      const newCar = this.createCarDomain(car);
      return newCar;
    }
    return car;
  }

  async updateById(id: string, car: ICar) {
    const carODM = new CarODM();
    const updatedCar = await carODM.updateById(id, car);
    if (updatedCar) {
      const newCar = this.createCarDomain(updatedCar);
      return newCar;
    }
    return updatedCar;
  }

  async deleteById(id: string) {
    const carODM = new CarODM();
    await carODM.deleteById(id);
  }
}