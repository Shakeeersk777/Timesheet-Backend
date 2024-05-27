import { PrepareResponse, catchError } from "../../Common/common-functions";
import { pool } from "../DBConfig/DBConfig";

export class AccountLogicDBLogic {
  public async login(Email: string, Password: string) {
    try {
      const query = 'SELECT * FROM public."Users" WHERE "Email" = $1';
      const result = (await pool.query(query, [Email])).rows;
      console.log("result = ", result);

      if (result.length) {
        const user = result[0];
        if (user.Password === Password) {
          return PrepareResponse(true, "Login successfully!", result);
        } else {
          return PrepareResponse(false, "Invalid Password", []);
        }
      } else {
        return PrepareResponse(false, "Invalid Email", []);
      }
    } catch (err: any) {
      console.error("Error during login:", err);
      return catchError(); // Ensure you pass the error to catchError
    }
  }

  public logout() {
    return true;
  }
}
