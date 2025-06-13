import express from "express";
import {
  createStaff,
  getStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
} from "../controller/staff.controller.js";

const router = express.Router();

router.post("/", createStaff);
router.get("/", getStaff);
router.get("/:id", getStaffById);
router.put("/:id", updateStaff);
router.delete("/:id", deleteStaff);

export default router;
