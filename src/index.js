import "regenerator-runtime/runtime";
import express from 'express';


import middlewareConfig from './db/config/middleware';
import config from './db/config/config';
import router from './routes'

const { port } = config

const app = express();
middlewareConfig(app)


app.get('/', (req, res) => {
    res.send('welcome')
})
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

