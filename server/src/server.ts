import express, { response } from 'express'
import routes from './routes'

const app = express();
routes.use(express.json());
app.use(routes)



app.listen(5000)