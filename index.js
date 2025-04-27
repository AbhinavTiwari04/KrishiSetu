const express = require("express");
const path = require("path");
const PORT = 3000;
const app = express();
app.set("view engine","ejs");
app.set("Views",path.resolve("./Views"));
app.use(express.static('Public'));
app.get("/",(req,res)=>{
    res.render("home");
})
app.get("/home/track",(req,res)=>{
    res.render("dashboard");
})
app.get("/home/contact",(req,res)=>{
    res.render("contact");
})
app.get("/home/weather",(req,res)=>{
    res.render("contact");
})
app.listen(PORT,()=>console.log("Sever started"));