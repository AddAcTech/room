import { SerialPort, ReadlineParser } from "serialport";
import express from "express";
import { Server } from "socket.io";
import http from "http";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const server = http.createServer(app);
//const io = socketIO.listen(server);
const io = new Server({});
io.listen(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname + "/public"));
server.listen(3000);

// Serial port
const port = new SerialPort({
  path: "/dev/ttyACM0",
  baudRate: 9600,
});

const parser = port.pipe(new ReadlineParser());

port.on("error", function (err) {
  console.log("Error: ", err.message);
});

parser.on("data", (data) => {
  console.log(data);
  io.emit("temp", data);
});
