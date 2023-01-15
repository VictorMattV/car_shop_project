import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoute from './routes/carRoute';
import motorcycleRoute from './routes/motorcycleRoute';

const app = express();
app.use(express.json());
app.use(carRoute, motorcycleRoute);
app.use(ErrorHandler.handle);
export default app;
