// import { app } from './app';
import 'reflect-metadata';
import './repositories/implementations/tables/connect';
import express from 'express';
import * as routers from './routes';

const app = express();

app.use(express.json());
app.use(routers.users);

app.listen(3001);
