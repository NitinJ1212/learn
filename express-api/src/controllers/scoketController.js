
import { Router } from "express";
import sendMessage from "../handlers/SocketHandler";

const router = Router();

router.get("/send", sendMessage);

export default router;
