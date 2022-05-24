import express from "express";
import { handler } from "./build/handler.js";
import http from "http";
import { Server } from "socket.io";

const app = express();

// add a route that lives separately from the SvelteKit app
app.get("/healthcheck", (req, res) => {
  res.end("ok");
});

// let SvelteKit handle everything else, including serving pre-rendered pages and static assets
app.use(handler);
const httpServer = http.createServer(app);
const io = new Server(httpServer);

httpServer.listen(3000, () => {
  console.log("Listening on port 3000");
});
