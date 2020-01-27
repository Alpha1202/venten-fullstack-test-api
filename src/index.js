import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './db/config/config';

const { port } = config

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('welcome')
})


app.listen(port, err => {
    if(err) {
        console.error(err);
    } else {
        console.log(`Server is running port ${port}`)
    }
})