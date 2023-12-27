import { Server, Socket } from "socket.io";

const sockets = (socket: Server) => {
    socket.on("connectoin", (socket: Socket) => {
        console.log(socket);
    });
};

export default sockets;
