'use strict'

import express from 'express';
import { json, urlencoded } from 'body-parser';
import indexRouter from './routes/index-router';
import productRouter from './routes/product-router';
import carRouter from './routes/car-router';
const app = express();

app.use(json());
app.use(urlencoded({extended: false}));

app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/car', carRouter);

export default app;
