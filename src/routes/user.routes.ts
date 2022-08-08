import { Router } from "express";
import { createUser } from "../controllers/user.controllers";
const router = Router();

router.get("/users", createUser);

export default router;