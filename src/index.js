const express=require('express');
const request = require('request')
var cors = require('cors');
const app=express();
app.use(cors());
app.get("/realnews",(req,res)=>{
   request("https://newsapi.org/v2/top-headlines?country=in&apiKey=dc3909033aaf4a9e820df51aa030d4db",
   (error,response,body)=>{
   if(!error && response.statusCode==200){
       const data=JSON.parse(body);
       res.send(data)
   }
   else{
    res.send("some error occurred")
   }
  
   })
})
app.listen(8000,()=>{
    console.log("application is listening at port 8000")
})

