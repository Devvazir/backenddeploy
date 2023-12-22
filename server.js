const express =require("express")

const app= express()

app.get("/",(req,res)=>{
    res.send("server up")
})


app.listen(5252,()=>{
    console.log("server is running up")
})