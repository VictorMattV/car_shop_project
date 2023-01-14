import { Model, model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarModel {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    }, {
    });
    this.model = models.Car || model('Car', this.schema);
  }

  async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  async findAll(): Promise<ICar[]> {
    return this.model.find();
  }

  async findById(_id: string): Promise<ICar | null> {
    return this.model.findOne({ _id });
  }

  async updateById(id: string, car: ICar): Promise<ICar | null> {
    return this.model.findByIdAndUpdate(id, car, { new: true });
  }
}
