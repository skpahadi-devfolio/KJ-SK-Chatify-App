import express from "express";
import { loginUser, signupUser } from "../controllers/authcontroller.js";
const router = express.Router();


//post requtes router for Signup:-
router.post('/auth/signup', signupUser);


//post request router for Login:-
router.post('/auth/login', loginUser);

export default router;
