import dotenv from "dotenv";
//environment config:-
dotenv.config();
import express from "express";
import cors from "cors";
import http from "http";           //this server for socket
import connectDb from "./config/db.js";
import authroute from "./routes/authroute.js"
import contactroute from "./routes/contactroute.js"
import chatbox from "./routes/chatbox.js"
import usersroute from "./routes/usersroute.js"
import { initSocket } from "./socket/socket.js";


const app = express()
const port = process.env.PORT ||  3000


app.use(express.json());

//cors:-
app.use(cors());

//Database connection
connectDb();


//Routing sections:-
app.use('/api', authroute);                 //Routes for both login & Signup
app.use('/api', contactroute);             //Route for Contact Page
app.use('/api', chatbox);                 //Route for chatbox Page
app.use('/api', usersroute);             //Route for allUserlist Page


//server create for socket.io:-
const server = http.createServer(app);

//socket initialize:-
initSocket(server);

app.get('/', (req, res) => {
  res.send('Hello Backend is Running!')
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
