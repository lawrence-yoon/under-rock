const dotenv = require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const apNews = require("./apNews")
const hackerNews = require("./hackerNews")
const weather = require("./weather")
let dataPayload = new Object()

const placeData = async ()=>{
    console.log("fetching data...")
    dataPayload = {
        newsAPArray: await apNews(),
        newsYCArray: await hackerNews(),
        weather: await weather()
    }
    setTimeout(placeData, 3600000)
}

placeData()

app.get('/', (req,res)=>{
    console.log("get request received at '/'")
    res.send("check /api/news route for news")
})

app.get('/api', (req, res)=>{
    console.log("get request received at '/api'")
    console.log("your public ip address is: " + req.socket.remoteAddress)
    res.send(dataPayload)
})

app.listen(port, ()=>{
    console.log(`Backend server running on port ${port}`)
})
