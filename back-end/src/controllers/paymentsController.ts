import { Request, Response } from 'express';
import { container } from 'tsyringe';


import CreateTransactionService from '../services/CreateTransactionService';

class PaymentController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { email, title, amount, description } = request.body;

      const createTransaction = container.resolve(CreateTransactionService);

      const transaction = createTransaction.execute({
        id,
        title,
        amount,
        description,
        email,
      });


        return transaction
      }catch(err){
        return response.send(err.message);
      }

    }
  }
}
export default PaymentController;
