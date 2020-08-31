import { Request, Response } from 'express';
import { CreateUserUseCase } from './createUseruserCase';

export class CreateUserController {
  private createUserUseCaseMethod: CreateUserUseCase;

  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCaseMethod = createUserUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      await this.createUserUseCaseMethod.execute({
        name,
        email,
        password,
      });

      return response
        .status(201)
        .json({ message: 'Usuário cadastrado com sucesso' });
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Erro inesperado',
      });
    }
  }
}
