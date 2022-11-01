require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const apNews = require("./apNews")
const hackerNews = require("./hackerNews")
let dataContainerAP = []
let dataContainerYC = []

const placeDataAP = async ()=>{
    dataContainerAP = await apNews()
}

placeDataAP()

const placeDataYC = async ()=>{
    dataContainerYC = await hackerNews()
}

placeDataYC()

app.get('/', (req,res)=>{
    res.send("scraper called, check /api route")
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

app.get('/api/newsAP', (req,res)=>{
    res.send(dataContainerAP)
})

app.get('/api/newsYC', (req,res)=>{
    res.send(dataContainerYC)
})

app.get('/api/weather', (req,res)=>{
    res.send("this is where the weather stuff will go.")
})

app.listen(port, ()=>{
    console.log(`Backend server running on port ${port}`)
})
