import express from "express";
import { contactMessage } from "../controllers/contactcontroller.js";
const router = express.Router();


//Post Request for contact route:-
router.post("/contact", contactMessage);

export default router;