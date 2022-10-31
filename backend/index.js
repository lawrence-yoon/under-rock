const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const port = process.env.PORT || 3000


app.get('/', (req,res)=>{
    res.send("hello, basic node and express server running.")
})

app.listen(port, ()=>{
    console.log(`Backend server running on port ${port}`)
})
