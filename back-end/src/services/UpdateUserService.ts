import { getRepository } from 'typeorm';

import User from '../entities/User';

interface IRequest {
  id: string;
  endereco: string;
  telefoneOpc: string;
  telefoneMov: string;
  foto: string;
  fotoDoc_frente: string;
  fotoDoc_verso: string;
}

class UpdateUserService {
  public async execute({
    id,
    endereco,
    telefoneOpc,
    telefoneMov,
    foto,
    fotoDoc_frente,
    fotoDoc_verso,
  }: IRequest): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw Error('Este  usuario não ja existe');
    }

    user.endereco = endereco;
    user.telefoneOpc = telefoneOpc;
    user.telefoneMov = telefoneMov;
    user.foto = foto;
    user.fotoDoc_frente = fotoDoc_frente;
    user.fotoDoc_verso = fotoDoc_verso;

    await userRepository.save(user);

    delete user.senha;
    return user;
  }
}

export default UpdateUserService;
