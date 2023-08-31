const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = new Date();
    let day= days[date.getDay()];
    let month=months[date.getMonth()];
    let d=date.getDate();
var arr=[];


import express from "express";
import bodyParser  from "body-parser"; 

const app=express();
const port=3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.render("index.ejs", {day1:day, month1:month, date1:d});
});


app.post("/submit", (req,res)=> {
    let inp=req.body["name"];
    if(inp!="")
    {
        arr.push(inp);
    }

    res.render("index.ejs", {list1:arr,day1:day, month1:month, date1:d});
})

app.listen(port, ()=> {
    console.log(`Server is running on `+ port);
});

