import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

const cars = '/cars';
const carsId = '/cars/:id';

routes.post(
  cars,
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  cars,
  (req, res, next) => new CarController(req, res, next).getAll(),
);

routes.get(
  carsId,
  (req, res, next) => new CarController(req, res, next).getById(),
);
 
routes.put(
  carsId,
  (req, res, next) => new CarController(req, res, next).updateById(),
);

routes.delete(
  carsId,
  (req, res, next) => new CarController(req, res, next).deleteById(),
);

export default routes;