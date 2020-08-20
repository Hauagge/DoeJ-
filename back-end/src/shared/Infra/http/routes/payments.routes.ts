import { Router } from 'express';

import PaymentsController from '../../../../controllers/paymentsController';

const paymentsController = new PaymentsController();

const paymentsRoutes = Router();
paymentsRoutes.get('/:id', paymentsController.create);

paymentsRoutes.get('/success', (req, res) => {
  return res.render('success_screen');
});

paymentsRoutes.get('/pending', (req, res) => {
  return res.render('pending_screen');
});

paymentsRoutes.get('/failure', (req, res) => {
  return res.render('failure_screen');
});

export default paymentsRoutes;
