import { Router } from "express";

export class ProductRoute {
  private router: Router = Router();
  constructor() {
    this.handleRoutes();
  }

  getRouter(): Router {
    return this.router;
  }

  private handleRoutes() {
    this.router.get("/", (req, res) => {
      res.json({ message: "Hello World" });
    });
  }
}