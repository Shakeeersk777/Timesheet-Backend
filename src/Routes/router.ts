import express from "express";
import { AccountLoginController } from "../Controller/ControllerLogic/AccountLoginController";
import { ROUTES_LIST } from "../Common/routes/routes";

export class Router {
  router = express.Router();

  intializeRoutes() {
    this.login();
    this.logOut();
  }

  private login() {
    const accountLoginController = new AccountLoginController();
    this.router.post(ROUTES_LIST.LOGIN, accountLoginController.login);
  }

  private logOut() {
    const accountLoginController = new AccountLoginController();
    this.router.get(ROUTES_LIST.LOGOUT, accountLoginController.logout);
  }
}
