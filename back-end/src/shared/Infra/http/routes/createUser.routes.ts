import { Router } from 'express';
// import multer from 'multer';
// import uploadConfig from '../../../../config/upaload';
import ensureAuthenticate from '../../../../middleware/ensureAuthenticate';

import CreateUserService from '../../../../services/CreateUserServicer';
import UpdateUserService from '../../../../services/UpdateUserService';

const userRouter = Router();
// const upload = multer(uploadConfig);

userRouter.post('/', async (request, response) => {
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
});

userRouter.put(
  '/complete/:id',
  ensureAuthenticate,
  async (request, response) => {
    const { endereco, telefoneOpc, telefoneMov } = request.body;
    try {
      const updateUser = new UpdateUserService();
      const user = await updateUser.execute({
        id: request.params.id,
        endereco,
        telefoneOpc,
        telefoneMov,
      });
      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
);
export default userRouter;
