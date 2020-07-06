import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../../../config/upaload';
import ensureAuthenticate from '../../../../middleware/ensureAuthenticate';

import CreateUserService from '../../../../services/CreateUserServicer';
import UpdateUserService from '../../../../services/UpdateUserService';

const user = Router();
const upload = multer(uploadConfig);

user.post('/', async (request, response) => {
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

user.put(
  '/complete',
  ensureAuthenticate,
  upload.single('file'),
  async (request, response) => {
    const { endereco, telefoneOpc, telefoneMov } = request.body;
    try {
      const updateUser = new UpdateUserService();
      await updateUser.execute({
        id: request.user.id,
        endereco,
        telefoneOpc,
        telefoneMov,
        foto: request.file.filename,
        fotoDoc_frente: request.file.filename,
        fotoDoc_verso: request.file.filename,
      });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
    return response.json({ ok: true });
  },
);
export default user;
