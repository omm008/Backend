import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const d = new Date();
    const day = d.getDay();

    let type = "Weekday ";
    let adv = " its time to work hard!"

    if(day===0 || day===6){
        type="Weekend";
        adv = " its time to relax man !!"
    }

    res.render("index.ejs",{
        dayType:type,
        advice:adv,
    })
})
app.listen(port,(req,res)=>{
    console.log(`Server running on ${port}`);
})