import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.createMotorcycle(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (err) {
      this.next(err);
    }
  }

  async getAll() {
    try {
      const motorcycleList = await this.service.getAll();
      return this.res.status(200).json(motorcycleList);
    } catch (err) {
      this.next(err);
    }
  }

  async getById() {
    const { id } = this.req.params;
    try {
      const validateID = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
      if (!validateID.test(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
      const motorcycle = await this.service.getById(id);
      if (!motorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(motorcycle);
    } catch (err) {
      this.next(err);
    }
  }

  async updateById() {
    const { id } = this.req.params;
    try {
      const validateID = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
      if (!validateID.test(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });

      const findMotorcycle = await this.service.getById(id);
      if (!findMotorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });

      const motorcycle: IMotorcycle = {
        model: this.req.body.model,
        year: this.req.body.year,
        color: this.req.body.color,
        status: this.req.body.status,
        buyValue: this.req.body.buyValue,
        category: this.req.body.category,
        engineCapacity: this.req.body.engineCapacity,
      };

      const updateMotorcycle = await this.service.updateById(id, motorcycle);
      return this.res.status(200).json(updateMotorcycle);
    } catch (err) {
      this.next(err);
    }
  }
}