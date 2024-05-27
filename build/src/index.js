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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./Routes/router");
const DBConfig_1 = require("./DBLogic/DBConfig/DBConfig");
const common_enum_1 = require("./Common/enum/common.enum");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const router = new router_1.Router();
// Define middleware to parse incoming request bodies
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Define your routes
router.intializeRoutes();
// Use the router object to handle routes
app.use("/", router.router);
// Start listening (using async/await)
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Attempting to connect to the database...");
            yield DBConfig_1.pool.connect(); // Connect to the database
            console.log("Connected to the database!");
            // Listen for 'connect' event
            DBConfig_1.pool.on("connect", () => {
                console.log("Connected to PostgreSQL database");
            });
            // Listen for 'error' event
            DBConfig_1.pool.on("error", (err) => {
                console.error("Error connecting to PostgreSQL database:", err);
            });
            // Listen for 'remove' event
            DBConfig_1.pool.on("remove", () => {
                console.log("Client removed");
            });
            app.listen(common_enum_1.PORT, () => {
                console.log(`Server is running on port ${common_enum_1.PORT}`);
            });
        }
        catch (error) {
            console.error("Error starting server:", error);
        }
    });
}
startServer();
