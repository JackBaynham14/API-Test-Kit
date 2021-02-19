/*
Dev server program
*/

const express = require("express");
const morgan = require("morgan");
const server = express();

server.use(morgan("dev"));
server.use(express.static('src'));

// Define API router
const api = express.Router()

api.use(express.json());
api.use(express.urlencoded());

api.get("", (req, res) => {
    res.send({head:"Sucessful GET request!"});
});

api.put("", (req, res) => {
    console.log(req.body);
    res.send({head:"Successful PUT request!",body:req.body});
})

server.use("/api", api);

server.listen(80, () => {
    console.log("Server listening on port " + 80);
})