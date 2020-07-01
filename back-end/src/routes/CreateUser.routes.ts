import { Router } from 'express';

import CreateUserService from '../services/CreateUserServicer';

const user = Router();

user.post('/', async (request, response) => {
  try {
    const { nome, email, login, senha, identifier_ID } = request.body;
    const createUser = new CreateUserService();
    const userCreated = await createUser.execute({
      nome,
      email,
      login,
      senha,
      identifier_ID,
    });
    return response.json(userCreated);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
export default user;
