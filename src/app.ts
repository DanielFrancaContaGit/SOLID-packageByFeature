import express, { Express } from 'express';
import cors from 'cors';
import * as routers from './routes';

class Application {
  public express: Express;

  constructor() {
    this.express = express();
    this.routers();
    this.middlewares();
  }

  routers() {
    this.express.use(routers.exampleRoute);
    this.express.use(routers.users);
  }

  middlewares() {
    this.express.use(cors);
    this.express.use(express.json());
  }
}

const app = new Application().express;

export { app };
