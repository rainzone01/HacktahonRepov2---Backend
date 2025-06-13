import express from 'express'
import { createLogs, getAllLogs, getLogsById, updateLogs, deleteLogs } from '../controller/logs.controller.js'

const router = express.Router();

router.post("/", createLogs);
router.get("/", getAllLogs);
router.get("/:id", getLogsById);
router.put("/:id", updateLogs);
router.delete("/:id", deleteLogs);

export default router;
