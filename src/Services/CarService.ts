import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import ICarModel from '../Interfaces/ICarModel';
import CarModel from '../Models/CarModel';

export default class CarService {
  private carModel: ICarModel;

  constructor(ModelCar = CarModel) {
    this.carModel = new ModelCar();
  }

  private createCarDomain(car: ICar) {
    return new Car(car);
  }

  async createCar(car: ICar) {
    const newCar = await this.carModel.create(car);
    const createDomainCar = this.createCarDomain(newCar);
    return createDomainCar;
  }
}