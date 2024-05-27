"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../src/Routes/routes");
const app = (0, express_1.default)();
const router = new routes_1.Router();
app.listen(4000, () => {
    console.log("listening at 4000");
});
app.use("/", router.router);
