import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
import config from './config';

const { isDev } = config


export default app => {
    app.use(morgan(isDev ? 'dev' : 'common'));
    app.use(express.json())
    app.use(express.urlencoded({ extended: false}))
    app.use(cors());
}