const fetch = require("node-fetch")
const jsdom = require("jsdom")
const {JSDOM} = jsdom
let dataArray = []

const hackerNews = async () => {
    const response = await fetch('https://news.ycombinator.com/')
    const data = await response.text()
    const domParsed = new JSDOM(data)
    const domDocument = domParsed.window.document.querySelectorAll('span.titleline')
    for(let i=0;i<domDocument.length;i++){
        const dataObject = {
            headline:domDocument[i].querySelector('a') ? domDocument[i].querySelector('a').textContent : "empty",
            hyperlink:domDocument[i].querySelector('a') ? domDocument[i].querySelector('a').href: "no provided hyperlink",
        }
        dataArray[i] = dataObject
    }
    for(let j=0;j<dataArray.length;j++){
        if(dataArray[j].hyperlink.includes('item?id=')){
            dataArray[j].hyperlink = "https://news.ycombinator.com/" + dataArray[j].hyperlink
        }
    }
    // need to write a filter or something, for every hyperlink that starts with 'item?id=', we concatenate it at the beginning with 'https://news.ycombinator.com/'
    // maybe use regex aka regular expressions. 
    // nevermind, i got it with a for loop and includes() method. 
    // console.log("scraper called, testing to see if its called when a get request is sent")
    return dataArray
}

module.exports = hackerNews
