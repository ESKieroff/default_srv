import { Router } from "express";
import * as userController from "../controllers/userController";

const userRoutes = Router();

userRoutes.get("/", userController.listAllUsers);
userRoutes.get("/:id", userController.getUserById);
userRoutes.put("/", userController.updateUser);
userRoutes.delete("/remove/:id", userController.removeUser);

export default userRoutes;