
//Require packages
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");


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

app.get("/signup.html", function(req, res){
  res.sendFile(__dirname+"/signup.html")
});

app.get("/signup.html", function(req, res){
  res.sendFile(__dirname+"/signup.html")
});

//catch the post request from the form sent to /signup.html
//post data to mailchimp API and respond with success or failure pages
app.post("/signup.html", function(req, res){

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const userEmail = req.body.email;

  const data = {
    members: [
      {
        email_address: userEmail,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        }
      }
    ]
  }

  const jsonData = JSON.stringify(data);

  const url = 'https://us19.api.mailchimp.com/3.0/lists/48ec87b064';
  const options = {
    method: "POST",
    auth: "filoxx:452616a7b4453961b7f03a056ac62bfc-us19"
  };

  const request = https.request(url, options, function(response){

    if (response.statusCode === 200) {
      res.sendFile(__dirname+"/success.html")
    } else {
      res.sendFile(__dirname+"/failure.html")
    }

    response.on("data", function(data){
      console.log(JSON.parse(data));
    })
  });

  request.write(jsonData);
  request.end();

});



//Spin server
app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
})
