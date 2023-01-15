import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';

describe('Car Service Test', function () {
  it('Should create a car with success', async function () {
    const carInfoInput = {
      model: 'Monza',
      year: 1985,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carInfoOutput = {
      id: '63c2d7c4fecae1f6c6abccd9', 
      model: 'Monza',
      year: 1985,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    sinon.stub(Model, 'create').resolves(carInfoOutput);

    const carService = new CarService();
    const result = await carService.createCar(carInfoInput);
    
    expect(result).to.deep.equal(carInfoOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});