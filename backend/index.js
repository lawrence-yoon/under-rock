const dotenv = require("dotenv").config() //interestingly, this only works with npm scripts. doesnt work when i try node index.js
const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const apNews = require("./apNews")
const hackerNews = require("./hackerNews")
const weather = require("./weather")
let newsPayload = new Object()
let weatherPayload = new Object()

const placeData = async ()=>{
    console.log("fetching data...")
    newsPayload = {
        newsAPArray: await apNews(),
        newsYCArray: await hackerNews()
    }
    weatherPayload = await weather()
    setTimeout(placeData, 14400000)
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
//we shall see...
app.get('/api/news', (req, res)=>{
    console.log("get request received at '/api/news'")
    res.send(newsPayload)
})

app.get('/api/weather', (req,res)=>{
    console.log("get request received at '/api/weather'")
    res.send(weatherPayload)
})

app.listen(port, ()=>{
    console.log(`Backend server running on port ${port}`)
})
