'use strict';
// Node静态服务
var http = require("http");
var express = require("express");
var serveStatic = require('serve-static');

var app = new express();

app.use(serveStatic('D:/angular/dbm'));

app.get("/", function(req, res) {
    //首页的页面名字
    res.sendFile("D:/angular/dbm/index.html");
});
app.listen(8080);
console.log("listening port 8080");