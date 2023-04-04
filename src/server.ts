import Express from 'express'
import Cors from 'cors'
import Dotenv from 'dotenv'

import routes from './Routes/routes'

Dotenv.config()

const app = Express();

app.use(Cors());
app.use(Express.json());
app.use(routes);

app.listen(process.env.PORT,()=>{
    console.log("Server Running")
});