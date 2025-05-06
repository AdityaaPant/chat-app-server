import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8081 });
let userCount = 0;

wss.on("connection", (socket) => {
	console.log("user connected" + userCount);
	userCount = userCount + 1;
});
