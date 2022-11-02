const dotenv = require("dotenv").config()
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

//i have a feeling this might not be the most efficient way to do this.
//i want to have it already called? and then respond with the data. 
//i might have to save it to a variable outside of this get request. 
//i think the way that i have it now, its calling the scraper() only when a get request is sent.
//i want it already to have it by the time the get request is sent. 

//fixed it, put it in a callback function that saves it in here. i forget the terminology for like global vs local variables? 
//issues came up, the log said i cant assign the data to const array variable, so i changed to let. 
//its working now, and i filtered out the empty ones within the scraper, at the bottom. same deal with global/local variable stuff.

//perhaps i look into gathering all news into one object. object, with key value pairs. 
// payload = {
//     newsAPArray: [],
//     newsYCArray: [],
// }

// as for the weather, i want it called whenever the client renders. how can i know where the person is? its gotta be a fresh api get request by click or render.

app.get('/api/news', (req, res)=>{
    console.log("get request received at '/api/news'")
    res.send(newsPayload)
})

//for the data to get called everytime the request is sent, i will need to put the async await in here. 
//something like the below code.
// app.get('/api/weather', async(req,res)=>{
//     res.send(await weather())
// })

app.get('/api/weather', (req,res)=>{
    console.log("get request received at '/api/weather'")
    res.send(weatherPayload)
})

app.listen(port, ()=>{
    console.log(`Backend server running on port ${port}`)
})
