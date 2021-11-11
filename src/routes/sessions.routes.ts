import { Request, Response } from 'express';
import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';
const sessionsRouter = Router();
interface User {
  user: any;
  token: string;
}
sessionsRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const authenticateUser = new AuthenticateUserService();

    const { user, token }: User = await authenticateUser.execute({
      email,
      password,
    });

    delete user.password;

    return res.json({ user, token });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;

// Dever da rota: Receber a requisição, chamar outro arquivo, devolver uma resposta
