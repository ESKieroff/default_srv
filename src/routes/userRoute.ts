import { Router } from "express";
import * as userController from "../controllers/userController";

const userRoutes = Router();

userRoutes.get("/", userController.listAllUsers);
userRoutes.post("/");
userRoutes.put("/:id", userController.updateUser);
userRoutes.patch("/");
userRoutes.delete("/:id", userController.removeUser);

export default userRoutes;