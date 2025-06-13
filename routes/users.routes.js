import express from "express";
import {
createUsers, getAllUsers, getUsersById, updateUsers, deleteUsers } from "../controller/users.controller.js";

const router = express.Router();

router.post("/", createUsers);
router.get("/", getAllUsers);
router.get("/:id", getUsersById);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

export default router;
