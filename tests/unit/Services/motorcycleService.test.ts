import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { motorcyclesArray, validMotorcycle, validMotorcycleOutput } from './Mocks/motorcycleMock';

describe('Motorcycle Service Test', function () {
  it('Should create a motorcycle with success', async function () {
    sinon.stub(Model, 'create').resolves(validMotorcycleOutput);

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.createMotorcycle(validMotorcycle);
    
    expect(result).to.deep.equal(validMotorcycleOutput);
  });
  
  it('Should get all motorcycles with success', async function () {
    sinon.stub(Model, 'find').resolves(motorcyclesArray);

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.getAll();
    
    expect(result).to.deep.equal(motorcyclesArray);
  });

  it('Should get a motorcycle by id with success', async function () {
    sinon.stub(Model, 'findOne').resolves(validMotorcycleOutput);

    const motorcycleID = '63c540e44ac5c87d6160d198';
    
    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.getById(motorcycleID);
    
    expect(result).to.deep.equal(validMotorcycleOutput);
  });

  it('Should update a motorcycle by id with success', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(validMotorcycleOutput);

    const motorcycleID = '63c540e44ac5c87d6160d198';
    
    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.updateById(motorcycleID, validMotorcycle);
    
    expect(result).to.deep.equal(validMotorcycleOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});