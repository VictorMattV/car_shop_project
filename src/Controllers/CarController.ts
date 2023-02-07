import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';
import { INVALID_CAR, INVALID_MONGO } from '../utils';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.createCar(car);
      return this.res.status(201).json(newCar);
    } catch (err) {
      this.next(err);
    }
  }

  async getAll() {
    try {
      const carList = await this.service.getAll();
      return this.res.status(200).json(carList);
    } catch (err) {
      this.next(err);
    }
  }

  async getById() {
    const { id } = this.req.params;
    try {
      const validateID = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
      if (!validateID.test(id)) return this.res.status(422).json(INVALID_MONGO);
      const car = await this.service.getById(id);
      if (!car) return this.res.status(404).json(INVALID_CAR);
      return this.res.status(200).json(car);
    } catch (err) {
      this.next(err);
    }
  } 

  async updateById() {
    const { id } = this.req.params;
    try {
      const validateID = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
      if (!validateID.test(id)) return this.res.status(422).json(INVALID_MONGO);

      const findCar = await this.service.getById(id);
      if (!findCar) return this.res.status(404).json(INVALID_CAR);

      const car: ICar = {
        model: this.req.body.model,
        year: this.req.body.year,
        color: this.req.body.color,
        status: this.req.body.status,
        buyValue: this.req.body.buyValue,
        doorsQty: this.req.body.doorsQty,
        seatsQty: this.req.body.seatsQty,
      };

      const updateCar = await this.service.updateById(id, car);
      return this.res.status(200).json(updateCar);
    } catch (err) {
      this.next(err);
    }
  }

  async deleteById() {
    const { id } = this.req.params;
    try {
      const validateID = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
      if (!validateID.test(id)) return this.res.status(422).json(INVALID_MONGO);
      const car = await this.service.getById(id);
      if (!car) return this.res.status(404).json(INVALID_CAR);
      await this.service.deleteById(id);
      return this.res.status(204).json();
    } catch (err) {
      this.next(err);
    }
  } 
}