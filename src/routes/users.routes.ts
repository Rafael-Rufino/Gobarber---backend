import { Request, Response } from 'express';
import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
const usersRouter = Router();

usersRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const createrUser = new CreateUserService();

    const user: any = await createrUser.execute({
      name,
      email,
      password,
    });
    delete user.password;
    return res.json({ user });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

export default usersRouter;

// Dever da rota: Receber a requisição, chamar outro arquivo, devolver uma resposta
