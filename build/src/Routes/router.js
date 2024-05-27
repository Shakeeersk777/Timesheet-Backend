"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const AccountLoginController_1 = require("../Controller/ControllerLogic/AccountLoginController");
const routes_1 = require("../Common/routes/routes");
class Router {
    constructor() {
        this.router = express_1.default.Router();
    }
    intializeRoutes() {
        this.login();
        this.logOut();
    }
    login() {
        const accountLoginController = new AccountLoginController_1.AccountLoginController();
        this.router.post(routes_1.ROUTES_LIST.LOGIN, accountLoginController.login);
    }
    logOut() {
        const accountLoginController = new AccountLoginController_1.AccountLoginController();
        this.router.get(routes_1.ROUTES_LIST.LOGOUT, accountLoginController.logout);
    }
}
exports.Router = Router;
