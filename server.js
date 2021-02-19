/*
Dev server program
*/

const express = require("express");
const morgan = require("morgan");
const server = express();

server.use(morgan("dev"));
server.use(express.static('src'));

server.get("/api", (req, res) => {
    res.send("Sucessful GET request!");
});

server.listen(80, () => {
    console.log("Server listening on port " + 80);
})