import axios from 'axios';

const apiMercadopago = axios.create({
	baseURL: 'https://api.mercadopago.com/v1/payments'
});

export default apiMercadopago;
