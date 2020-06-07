import express from 'express';

import PointsController from './app/controllers/PointsController';
import ItemsController from './app/controllers/ItemsController';

const routes = express.Router();

routes.get('/items', ItemsController.index);

routes.post('/points', PointsController.store);
routes.get('/points/:id', PointsController.show);

export default routes;