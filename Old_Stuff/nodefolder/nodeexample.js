var express = require("express");

var server = express();

server.use(express.statistics("src"));

server.listen(3000);


