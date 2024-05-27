"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
class Router {
    constructor() {
        this.router = express_1.default.Router();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.verifyLogin();
    }
    verifyLogin() {
        this.router.get("/", (req, res) => {
            res.send("hello shakeer");
        });
    }
}
exports.Router = Router;
const accountsRouter = new Router();
exports.default = accountsRouter.router;
