import express from "express";
import { getAllUsers, getUserById } from "../controllers/userscontroller.js";
const router = express.Router();


//Get Router route:-
router.get("/alluser", getAllUsers);
router.get("/users/:id", getUserById);


export default router;