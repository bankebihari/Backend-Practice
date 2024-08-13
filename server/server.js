const express= require("express")
const app=express();

app.get("/",(req,res) =>{
    res
    .status
    .send("hello sir");
})

PORT=3000;
app.listen(PORT,() =>{
    console.log(`server is running at port ${PORT}`);
    
})