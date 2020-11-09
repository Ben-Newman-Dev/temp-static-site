#!/usr/bin/env nodejs
const https = require("https");
const fs = require("fs");

const optionsD = {
    key: fs.readFileSync("/etc/letsencrypt/live/bnewman.dev/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/bnewman.dev/fullchain.pem")
};

const options = {
    
}

const express = require("express");


const port = 443;
const app = express();

	
app.use(express.static('public'));

const server = https.createServer(options, app);
server.listen(port, () => {
    console.log("Server Online");
})