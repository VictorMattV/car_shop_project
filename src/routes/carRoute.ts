import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).create());
routes.get('/cars', (req, res, next) => new CarController(req, res, next).getAll());
routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getById());

export default routes;