
module.exports = io => socket => {
    console.log("Made socket connection", socket.id, );
    
    socket.on("chat message", msg => {
        console.log(msg);
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        io.emit("user disconnected", socket.userId);
    });
}