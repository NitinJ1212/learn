
import { Router } from "express";
import socketController from "../controllers/scoketController";

const router = Router();

router.post("/", socketController);

export default router;
