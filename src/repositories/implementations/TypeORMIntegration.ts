/* eslint-disable class-methods-use-this */
import { IUsersRepository } from 'repositories/IUsersRepository';
import { getRepository } from 'typeorm';
import { User } from '../../entities/User';
import { UserTable } from './tables/entity/User';

export class TypeORMIntegration implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    return new User({
      name: 'Daniel',
      email: 'Daniel@gmail.com',
      password: '1234',
    });
  }

  async save(user: User): Promise<void> {
    const repository = getRepository(UserTable);

    const { email } = user;

    const userExist = await repository.findOne({ where: { email } });

    if (userExist) {
      throw new Error('Usuário já existe erro de implementação');
    }

    const userEntity = repository.create(user);

    await repository.save(userEntity);
  }
}
