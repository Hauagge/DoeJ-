import { getRepository } from 'typeorm';

import User from '../entities/User';

interface IRequest {
  id: string;
  endereco: string;
  telefoneOpc: string;
  telefoneMov: string;
  foto: string;
  fotoDocFront: string;
  fotoDocVerso: string;
  docID: string;
  nascimento: Date;
}

class UpdateUserService {
  public async execute({
    id,
    endereco,
    telefoneOpc,
    telefoneMov,
    foto,
    fotoDocFront,
    fotoDocVerso,
    docID,
    nascimento,
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
    user.fotoDoc_frente = fotoDocFront;
    user.fotoDoc_verso = fotoDocVerso;
    user.docID = docID;
    user.nascimento = nascimento;

    await userRepository.save(user);

    delete user.senha;
    return user;
  }
}

export default UpdateUserService;
