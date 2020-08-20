import { mercadopago } from 'mercadopago';

export default {
  mercadopago.configure({
    acess_token: process.env.MP_ACCESS_TOKEN
  })
};
