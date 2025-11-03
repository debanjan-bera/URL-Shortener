// const express = require("express")
import express from "express"
import {nanoid} from "nanoid"

const app = express();
const PORT = 4000;

//Body Parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get("/",(req,res)=>{
    res.send(`<h2>Hello Users</>`)
})

app.post("/api/create",(req,res)=>{
    const {url} = req.body
    const shortUrl = nanoid(7)
    console.log(url,shortUrl);
    res.send(shortUrl)
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})