import { IUsersRepository } from 'repositories/IUsersRepository';
import { User } from '../entities/User';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  private userRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.userRepository = usersRepository;
  }

  async execute(data: ICreateUserRequestDTO) {
    // const userAlreadyExists = this.userRepository.findByEmail(data.email);

    // if (userAlreadyExists) {
    //   throw new Error('User already exists.');
    // }

    const user = new User(data);

    await this.userRepository.save(user);
  }
}
