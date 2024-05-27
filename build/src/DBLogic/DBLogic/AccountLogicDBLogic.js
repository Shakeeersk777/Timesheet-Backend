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
exports.AccountLogicDBLogic = void 0;
const common_functions_1 = require("../../Common/common-functions");
const DBConfig_1 = require("../DBConfig/DBConfig");
class AccountLogicDBLogic {
    login(Email, Password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = 'SELECT * FROM public."Users" WHERE "Email" = $1';
                const result = (yield DBConfig_1.pool.query(query, [Email])).rows;
                console.log("result = ", result);
                if (result.length) {
                    const user = result[0];
                    if (user.Password === Password) {
                        return (0, common_functions_1.PrepareResponse)(true, "Login successfully!", result);
                    }
                    else {
                        return (0, common_functions_1.PrepareResponse)(false, "Invalid Password", []);
                    }
                }
                else {
                    return (0, common_functions_1.PrepareResponse)(false, "Invalid Email", []);
                }
            }
            catch (err) {
                console.error("Error during login:", err);
                return (0, common_functions_1.catchError)(); // Ensure you pass the error to catchError
            }
        });
    }
    logout() {
        return true;
    }
}
exports.AccountLogicDBLogic = AccountLogicDBLogic;
