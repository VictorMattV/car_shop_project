import ICar from '../../../../src/Interfaces/ICar';

export const validCar: ICar = {
  model: 'Monza',
  year: 1985,
  color: 'Black',
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

export const validCarOutput: ICar = {
  id: '63c2d7c4fecae1f6c6abccd9', 
  model: 'Monza',
  year: 1985,
  color: 'Black',
  status: false,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};
    
export const updatedCar: ICar = {
  model: 'Uno da Escada',
  year: 1979,
  color: 'Red',
  status: true,
  buyValue: 3500,
  doorsQty: 2,
  seatsQty: 4,
};
  
export const carsArray: ICar[] = [
  {
    id: '63c5310fe5d2083b6d8c68d2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '63c53134e5d2083b6d8c68d4',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: true,
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];