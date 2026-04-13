import express from "express";
import { ChatboxMessage, getchatbyuserId } from "../controllers/chatbox.js";
import { authmiddleware } from "../middleware/authmiddleware.js";
const router = express.Router();


//get Route for Chatbox:-
router.get("/chatbox/:user_id", authmiddleware, getchatbyuserId);

//Post Route for Chatbox:-
router.post("/chatbox", authmiddleware, ChatboxMessage);

export default router;