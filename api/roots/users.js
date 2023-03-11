import express from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import User from "../models/User.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post("/", createUser);

//UPDATE
router.put("/:id", updateUser);
// DELETE
router.delete("/:id", deleteUser);
// GET
router.get("/:id", getUser);
// GET ALL
router.get("/", getUsers);
export default router