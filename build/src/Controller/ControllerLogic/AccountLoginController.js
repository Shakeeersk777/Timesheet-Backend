"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountLoginController = void 0;
const AccountLoginBussinessLogic_1 = require("../../BussinessLogic/BussinessLogic/AccountLoginBussinessLogic");
class AccountLoginController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Email, Password } = req.body;
            console.log('req.body = ', req.body);
            const accountLogicBL = new AccountLoginBussinessLogic_1.AccountLoginBussinessLogic();
            let result = yield accountLogicBL.login(Email, Password);
            if (result) {
                res.send(result);
            }
            else {
                res.send(result);
            }
        });
    }
    logout(req, res) {
        const accountLogicBL = new AccountLoginBussinessLogic_1.AccountLoginBussinessLogic();
        let result = accountLogicBL.logout();
        if (result) {
            res.send("logout successfull");
        }
        else {
            res.send("logout failed");
        }
    }
}
exports.AccountLoginController = AccountLoginController;
