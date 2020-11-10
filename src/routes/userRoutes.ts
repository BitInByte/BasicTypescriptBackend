import { Router, RequestHandler } from "express";

export default class UserRoute {
  private userRouter;

  constructor() {
    // Instantiate the Router
    this.userRouter = Router();

    // Instantiate controllers

    // Instantitate routers
    this.getRoutes();
    this.postRoutes();
    this.patchRoutes();
    this.deleteRoutes();
  }

  //   Routes
  private getRoutes() {
    this.userRouter.get("/", (req, res, next) => {
      res.status(200).json({
        message: "Success",
      });
    });
  }

  private postRoutes() {}

  private patchRoutes() {}

  private deleteRoutes() {}

  // Getter
  public getRouter() {
    return this.userRouter;
  }
}
