import { Router, Request, Response } from 'express';
import { createUserControler } from '../useCases';

const router = Router();

router
  .route('/users')
  .post((request, response) => {
    return createUserControler.handle(request, response);
  })
  .get((request, response) => {
    response.send('oi');
  });

export { router as users };
