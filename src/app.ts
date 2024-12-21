import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import { ProductRoute } from './modules/products/product.route';
import { UserRoute } from './modules/users/users.route';

export class Server {
    private app: Application;
    private port: number;

    constructor() {
        this.port = process.env.PORT ? parseInt(process.env.PORT) : 5052;
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json()); // 
        this.app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
        this.app.use(morgan('dev')); // Log HTTP requests
    }

    routes() {
        this.app.use('/api/products', new ProductRoute().getRouter());
        this.app.use('/api/users', new UserRoute().getRouter());
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }


}