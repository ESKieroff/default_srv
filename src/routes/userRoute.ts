import { Router } from "express";
import * as userController from "../controllers/userController";

const userRoutes = Router();

userRoutes.get("/", userController.listAllUsers);
userRoutes.post("/register", userController.createUser);
userRoutes.get("/:id", userController.getUserById);
userRoutes.put("/", userController.updateUser);
userRoutes.delete("/remove/:id", userController.removeUser);
//userRoutes.get("/byemail", userController.getUserByEmail);
//userRoutes.get("/", userController.getUserNamebyEmail);

export default userRoutes;