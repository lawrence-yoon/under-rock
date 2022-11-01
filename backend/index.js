const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const scraper = require("./scraper")
let dataContainer = []

const placeData = async ()=>{
    dataContainer = await scraper()
}

placeData()

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
app.get('/api/news', (req,res)=>{
    res.send(dataContainer)
})

app.listen(port, ()=>{
    console.log(`Backend server running on port ${port}`)
})
