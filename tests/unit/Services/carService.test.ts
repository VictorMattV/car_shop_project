import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { carsArray, validCar, validCarOutput } from './Mocks/carMock';

describe('Car Service Test', function () {
  it('Should create a car with success', async function () {
    sinon.stub(Model, 'create').resolves(validCarOutput);

    const carService = new CarService();
    const result = await carService.createCar(validCar);
    
    expect(result).to.deep.equal(validCarOutput);
  });

  it('Should get all cars with success', async function () {
    sinon.stub(Model, 'find').resolves(carsArray);

    const carService = new CarService();
    const result = await carService.getAll();
    
    expect(result).to.deep.equal(carsArray);
  });

  it('Should get a car by id with success', async function () {
    sinon.stub(Model, 'findOne').resolves(validCarOutput);

    const carID = '63c2d7c4fecae1f6c6abccd9';
    
    const carService = new CarService();
    const result = await carService.getById(carID);
    
    expect(result).to.deep.equal(validCarOutput);
  });

  it('Should update a car by id with success', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(validCarOutput);

    const carID = '63c2d7c4fecae1f6c6abccd9';
    
    const carService = new CarService();
    const result = await carService.updateById(carID, validCar);
    
    expect(result).to.deep.equal(validCarOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});