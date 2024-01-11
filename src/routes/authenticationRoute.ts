import { Router } from "express";
import * as userController from "../controllers/userController";

const authenticationRoutes = Router();

authenticationRoutes.post("/register", userController.createUser);


authenticationRoutes.get("/", userController.getUserNamebyEmail);
//authenticationRoutes.post("/login", loginUserController);
//authenticationRoutes.post("/refreshToken", refreshTokenController);
//authenticationRoutes.patch("/recoveryMail", sendRecoveryEmail)
//authenticationRoutes.get("/byemail", userController.getUserByEmail);
export default authenticationRoutes;