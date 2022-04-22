import express from 'express'
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
routes.use(express.json())

const pointsController = new PointsController();
const itensController = new ItemsController();



routes.get('/items', itensController.index)
routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/pointsall', pointsController.getAll)

routes.get('/points/:id', pointsController.show)


export default routes