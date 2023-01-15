import { Model, model, models, Schema, UpdateQuery } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  private schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  async findAll(): Promise<T[]> {
    return this.model.find();
  }

  async findById(_id: string): Promise<T | null> {
    return this.model.findOne({ _id });
  }

  async updateById(_id: string, obj: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(_id, { ...obj } as UpdateQuery<T>, { new: true });
  }
}