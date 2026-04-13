import { Server } from "socket.io";

let io;

export const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: "*",
        },
    });

    io.on("connection", (socket) => {
        // console.log("User connected:", socket.id);

        //join room for security
        socket.on("join_room", (roomId) => {
            socket.join(roomId);
            // console.log("User join room:", roomId);
        });

        //send message to room
        socket.on("send_message", (data) => {
            const {sender , receiver} = data;

            const roomId = sender<receiver ? `${sender}_${receiver}` : `${receiver}_${sender}`;

            io.to(roomId).emit("receive_message", data);
        })

        socket.on("disconnect", ()=>{
            // console.log("User Disconnected");
        });
    });
};

export const getIO = () => {
    if(!io){
        throw new Error("Socket.io is not initialized");
    }
    return io;
}