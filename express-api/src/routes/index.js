
import { Router } from "express";
import socketRoutes from "./SocketRoutes.js";


const router = Router();

// Base paths
router.use("/socket", socketRoutes);

export default router;
