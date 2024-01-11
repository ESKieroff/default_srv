
import { Router } from "express";
import userRoutes from "./userRoute";
import authenticationRoutes from "./authenticationRoute";
import routerLogin from "./login";

const router = Router();

router.use("/users", userRoutes);
router.use("/authentication", authenticationRoutes);
router.use('/login', routerLogin);

export default router;