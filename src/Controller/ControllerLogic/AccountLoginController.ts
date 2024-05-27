import express from "express";
import { AccountLoginBussinessLogic } from "../../BussinessLogic/BussinessLogic/AccountLoginBussinessLogic";

export class AccountLoginController {
  public async login(req: express.Request, res: express.Response) {
    const {Email, Password} = req.body;
    console.log('req.body = ',req.body);
    
    const accountLogicBL = new AccountLoginBussinessLogic();
    let result = await accountLogicBL.login(Email, Password);
    if (result) {
      res.send(result);
    } else {
      res.send(result);
    }
  }

  public logout(req: express.Request, res: express.Response) {
    const accountLogicBL = new AccountLoginBussinessLogic();
    let result = accountLogicBL.logout();
    if (result) {
      res.send("logout successfull");
    } else {
      res.send("logout failed");
    }
  }
}
