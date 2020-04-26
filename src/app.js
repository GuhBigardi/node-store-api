'use strict'

//libs externas
import express from 'express';
import mongoose from 'mongoose';
import { json, urlencoded } from 'body-parser';

//rotas
import indexRouter from './routes/index-router';
import productRouter from './routes/product-router';
import carRouter from './routes/car-router';

const app = express();

app.use(json());
app.use(urlencoded({extended: false}));

mongoose.connect('mongodb://localhost:27017/nodeStore');

app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/car', carRouter);

export default app;
