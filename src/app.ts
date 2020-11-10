import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

import UserRoutes from "./routes/userRoutes";

export default class App {
  private app;

  constructor() {
    this.app = express();

    // Apply app middlewares
    this.middlewares();

    // Apply security

    // Apply routes
    this.routes();

    // Apply error handler function
    this.errorHandling();
  }

  // Middlewares
  private middlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  // Security

  // Routes
  private routes() {
    this.app.use("/api/v1/user", new UserRoutes().getRouter());
  }

  // Error handling
  private errorHandling() {
    this.app.use(
      (error: Error, req: Request, res: Response, next: NextFunction) => {
        console.log(error);
        res.status(500).json({ message: "Internal error..." });
      }
    );
  }

  //   Getters
  public getApp() {
    return this.app;
  }

  // Return new Class
  public static createApp() {
    return new App();
  }
}
