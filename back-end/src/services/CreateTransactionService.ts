import mercadopago from 'mercadopago';

import User from '../repositories/UserRepositorie';

interface IRequest {
  amount: string;
  id: string;
  title: string;
  description: string;
  email: string;
}

class PaymentController extends User {
  public async execute({
    id,
    email,
    title,
    description,
    amount,
  }: IRequest): Promise<Response> {
    await mercadopago.configure({
      access_token: process.env.MP_ACCESS_TOKEN,
      sandbox: process.env.SANBOX === 'true',
    });

    const purchaseOrder = {
      items: [
        {
          id,
          title,
          description,
          quantity: 1,
          currency_id: 'BRL',
          unit_price: parseFloat(amount),
        },
      ],
      payer: {
        email,
      },
      auto_return: 'all',
      external_reference: id,
      back_urls: {
        success: `${process.env.APP_WEB_URL}/checkout/payments/success`,
        pending: `${process.env.APP_WEB_URL}/checkout/payments/pending`,
        failure: `${process.env.APP_WEB_URL}/checkout/payments/failure`,
      },
    };

    const preference = await mercadopago.preferences.create(purchaseOrder);

    return preference;
  }
}
export default PaymentController;
