const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require('socket.io')(server)
const socketManage = require('./socketManage')(io)

io.on('connection', socketManage )

server.listen(6868, () => console.log("server running on port:" + 6868));

