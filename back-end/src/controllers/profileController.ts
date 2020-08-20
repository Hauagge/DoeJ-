import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateProfileService from '../services/UpdateUserService';
import ShowProfileService from '../services/ShowUserService';

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const showProfile = container.resolve(ShowProfileService);

    const user = await showProfile.execute({ user_id });

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user;
      const {
        endereco,
        telefoneOpc,
        telefoneMov,
        docID,
        nascimento,
      } = request.body;

      const updateProfile = container.resolve(UpdateProfileService);

      const user = await updateProfile.execute({
        id,
        endereco,
        telefoneOpc,
        telefoneMov,
        docID,
        nascimento,
      });

      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
