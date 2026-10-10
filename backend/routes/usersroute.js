import express from "express";
import { getAllUsers, getUserById, getMyChatUsers } from "../controllers/userscontroller.js";
import { authmiddleware } from "../middleware/authmiddleware.js";
const router = express.Router();


//Get Router route:-
router.get("/my-chats", authmiddleware, getMyChatUsers);  //main Box
router.get("/alluser", authmiddleware, getAllUsers);   //new chat search
router.get("/users/:id", authmiddleware, getUserById);


export default router;