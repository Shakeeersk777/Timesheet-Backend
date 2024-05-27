import { AccountLogicDBLogic } from "../../DBLogic/DBLogic/AccountLogicDBLogic";

export class AccountLoginBussinessLogic {
  public login(Email: string, Password: string): any {
    const accountDBLogic = new AccountLogicDBLogic();
    return accountDBLogic.login(Email, Password);
  }
  public logout(): boolean {
    const accountDBLogic = new AccountLogicDBLogic();
    return accountDBLogic.logout();
  }
}
