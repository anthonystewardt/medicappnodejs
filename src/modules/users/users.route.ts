import { Router } from 'express';
import { UserFactory } from './domain/user-factory';

export class UserRoute {
  private router: Router = Router();
  constructor() {
    this.handleRoutes();
  }

  getRouter(): Router {
    return this.router;
  }

  private handleRoutes() {
    this.router.get('/', (req, res) => {
      const userObj = UserFactory.create('1', 'Alejandra', 'john.doe@company.com', 'password123', ['admin']);

      res.json({ message: 'Hello World', user: userObj });
    });
  }
}



