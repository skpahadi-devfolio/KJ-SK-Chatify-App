import { Server } from "socket.io";

let io;

export const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: "*",
        },
    });

    io.on("connection", (socket) => {
       
        //join room for security
        socket.on("join_room", (roomId) => {
            socket.join(roomId);
            
        });

        //send message to room
        socket.on("send_message", (data) => {
            const {sender , receiver} = data;

            const roomId = sender<receiver ? `${sender}_${receiver}` : `${receiver}_${sender}`;

            io.to(roomId).emit("receive_message", data);
        })

        socket.on("disconnect", ()=>{
            
        });
    });
};

export const getIO = () => {
    if(!io){
        throw new Error("Socket.io is not initialized");
    }
    return io;
}