const express = require('express');
const app = express();
const fs = require('fs')
const cors = require("cors");
const bodyParser = require("body-parser");


app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

setTimeout(()=>{
    
app.post("/formData", function(req, res) {

    res.writeHead(200,'form Data Being Saved')

        let { googleId, imageUrl, email, name, givenName, fanilyName } = req.body;   

    let dataReceived = JSON.stringify(req.body);

    fs.appendFile("formData.txt", dataReceived, (err) => {
        if (err) {
            console.log(err)

        } else {
            console.log('Data Successfully Saved')
        }
    });

});
},20000)

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`)
})