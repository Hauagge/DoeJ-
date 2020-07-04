import { Router } from 'express';

const user = Router();

user.post('/', async (request, response) => {
  try {
    const {
      endereco,
      telefone1,
      telefone2,
      avatar,
      fotoDocFront,
      fotoDrocBack,
    } = request.body;
    const createUser = new CreateUserService();
    const userCreated = await createUser.execute({
      nome,
      login,
      email,
      senha,
      identifier_ID,
    });
    return response.json(userCreated);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
export default user;
