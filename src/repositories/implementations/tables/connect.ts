/* eslint-disable no-console */
import { createConnection } from 'typeorm';

createConnection().then(() => console.log('Conectado com o banco de dados'));
