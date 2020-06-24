import { uuid } from 'uuidv4';

import IUserTokenRepository from '@modules/users/repositories/IUSersTokensRepository';

import UserToken from '../../Infra/typeorm/entities/UserToken';

class FakeUserTOkenRepository implements IUserTokenRepository {
  private usersTokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id,
    });

    this.usersTokens.push(userToken);

    return userToken;
  }
}
export default FakeUserTOkenRepository;
