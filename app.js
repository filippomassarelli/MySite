
//Require packages
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//
app.use(bodyParser.urlencoded({extended: true}));
//access static files e.g. CSS, images
app.use(express.static("public"));

//send corresponding html files for each get request
app.get("/", function(req, res){
    res.sendFile(__dirname + "/home-index.html")
})

app.get("/home-index.html", function(req, res){
    res.sendFile(__dirname + "/home-index.html")
})

app.get("/ps1-index.html", function(req, res){
    res.sendFile(__dirname + "/ps1-index.html")
})

app.get("/ps2-index.html", function(req, res){
    res.sendFile(__dirname + "/ps2-index.html")
})

app.get("/tindog-index.html", function(req, res){
    res.sendFile(__dirname + "/tindog-index.html")
})

app.get("/dicee.html", function(req, res){
    res.sendFile(__dirname + "/dicee.html")
})

app.get("/drumkit-index.html", function(req, res){
    res.sendFile(__dirname + "/drumkit-index.html")
})

app.get("/simon-index.html", function(req, res){
    res.sendFile(__dirname + "/simon-index.html")
})

app.get("/work-in-progress.html", function(req, res){
    res.sendFile(__dirname + "/work-in-progress.html")
})



//Spin server
app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
})
