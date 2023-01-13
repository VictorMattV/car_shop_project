import ICar from './ICar';

export default interface ICarModel {
  create(car: ICar): Promise<ICar>
}