import { Router } from 'express';

const router = Router();

router.route('/').get((request, response) => {
  response.json({ message: 'Example Route' });
});

export { router as exampleRoute };
