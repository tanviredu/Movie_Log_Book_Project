// app.js
const express    = require("express");
const mongoose   = require("mongoose");
const cors       = require("cors");
const bodyParser = require("body-parser");
const config     = require("./config/config");
const app        = express();
const Message    = require("./models/db");
const PORT       = 8000;


// middleware goes here
app.use(cors());
app.use(bodyParser.json());

// routes go here
app.get("/",(req,res)=>{
    res.json({
        message:"This is the venom stack",
    })
})

// get request goes here
app.get("/message",(req,res)=>{
    Message.find({},(err,messages)=>{
        if(err){
            res.json({
                error:err
            })
        }
        res.json(messages);
    })
})


// post request goes here
app.post("/message", async (req,res)=>{
    const new_msg  = new Message({
        username:req.body.username,
        subject:req.body.subject,
        message:req.body.message,
        imageURL:req.body.imageURL,
    })
    // console.log(new_msg);
    try{
        await new_msg.save();
        res.json(new_msg);

    }catch(error){
        res.status(500);
        res.json(error);
    }

});







const url        = config.mongourl;
const connect    = mongoose.connect(url);
connect.then(()=>{
    console.log("DB Server Connected");
    app.listen(PORT);
    console.log("[+] Started Server");
})