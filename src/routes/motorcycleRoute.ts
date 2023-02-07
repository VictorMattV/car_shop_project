import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycles = '/motorcycles';
const motorcyclesId = '/motorcycles/:id';

const routes = Router();

routes.post(
  motorcycles,
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

routes.get(
  motorcycles,
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

routes.get(
  motorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

routes.put(
  motorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).updateById(),
);

routes.delete(
  motorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).deleteById(),
);

export default routes;