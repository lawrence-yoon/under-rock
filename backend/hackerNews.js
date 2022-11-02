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
    console.log("HackerNews from YC scraped")
    console.log(dataArray)
    return dataArray
}

module.exports = hackerNews
