import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';

class CreateUserController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { nome, login, email, senha, identifier_ID } = request.body;

      const createUser = new CreateUserService();

      const userCreated = await createUser.execute({
        nome,
        login,
        email,
        senha,
        identifier_ID,
      });

      console.log('usuario criado');
      return response.json(userCreated);
    } catch (err) {
      console.log(err);
      console.log('usuario não criado');
      return response.status(400).json({ error: err.message });
    }
  }
}

export default CreateUserController;
