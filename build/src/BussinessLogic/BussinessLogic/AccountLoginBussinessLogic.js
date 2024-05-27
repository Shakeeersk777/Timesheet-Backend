"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountLoginBussinessLogic = void 0;
const AccountLogicDBLogic_1 = require("../../DBLogic/DBLogic/AccountLogicDBLogic");
class AccountLoginBussinessLogic {
    login(Email, Password) {
        const accountDBLogic = new AccountLogicDBLogic_1.AccountLogicDBLogic();
        return accountDBLogic.login(Email, Password);
    }
    logout() {
        const accountDBLogic = new AccountLogicDBLogic_1.AccountLogicDBLogic();
        return accountDBLogic.logout();
    }
}
exports.AccountLoginBussinessLogic = AccountLoginBussinessLogic;
