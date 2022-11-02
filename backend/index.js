const dotenv = require("dotenv").config() //interestingly, this only works with npm scripts. doesnt work when i try node index.js
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


// as for the weather, i want it called whenever the client renders. how can i know where the person is? its gotta be a fresh api get request by click or render.
// api has limits, so i placed it in the placeData callback function. 

//for the data to get called everytime the request is sent, i will need to put the async await in here. 
//something like the below code.
// app.get('/api/weather', async(req,res)=>{
//     res.send(await weather())
// })

//i can maybe clean up this area, using express router?
//i dont think i really need that at the moment, since this is mainly my personal minimalist dashboard app. 
//at the moment i only really have get requests, at two different endpoints. 
//perhaps i might refactor it to one payload at route /api/
app.get('/api', (req, res)=>{
    console.log("get request received at '/api'")
    console.log("your public ip address is: " + req.socket.remoteAddress)
    res.send(dataPayload)
})

app.listen(port, ()=>{
    console.log(`Backend server running on port ${port}`)
})
