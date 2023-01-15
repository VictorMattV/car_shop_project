import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Motorcycle Service Test', function () {
  it('Should create a motorcycle with success', async function () {
    const motorcycleInfoInput = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const motorcycleInfoOutput = {
      id: '63c482f482628f42941eb3ce',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'create').resolves(motorcycleInfoOutput);

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.createMotorcycle(motorcycleInfoInput);
    
    expect(result).to.deep.equal(motorcycleInfoOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});