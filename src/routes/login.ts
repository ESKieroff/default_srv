import { Router, Request, Response, NextFunction } from "express";

const routerLogin = Router();

routerLogin.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.render('login', { title: 'Login', message: null });
});

export default routerLogin;
