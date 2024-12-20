import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';


export class Server {
    private app: Application;
    private port: number;

    constructor() {
        this.port = process.env.PORT ? parseInt(process.env.PORT) : 5052;
        this.app = express();
        this.middlewares();
    }

    middlewares() {
        this.app.use(express.json()); // 
        this.app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
        this.app.use(morgan('dev')); // Log HTTP requests
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

 
}