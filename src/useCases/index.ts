import { TypeORMIntegration } from '../repositories/implementations/TypeORMIntegration';
import { CreateUserUseCase } from './createUseruserCase';
import { CreateUserController } from './CreateUserControler';

const typeORMRepositoty = new TypeORMIntegration();

const createUserUseCase = new CreateUserUseCase(typeORMRepositoty);

const createUserControler = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserControler };
