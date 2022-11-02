const fetch = require("node-fetch")
const jsdom = require("jsdom")
const {JSDOM} = jsdom
let dataArray = []

const apNews = async () => {
    const response = await fetch('https://apnews.com/hub/world-news')
    const data = await response.text()
    const domParsed = new JSDOM(data)
    const domDocument = domParsed.window.document.querySelectorAll('div.FeedCard')
    for(let i=0;i<domDocument.length;i++){
        const dataObject = {
            headline:domDocument[i].querySelector('h2') ? domDocument[i].querySelector('h2').textContent : "empty",
            hyperlink:domDocument[i].querySelector('a') ? "https://apnews.com" + domDocument[i].querySelector('a').href: "no provided hyperlink",
            summary:domDocument[i].querySelector('p') ? domDocument[i].querySelector('p').textContent : "no provided summary",
            timestamp:domDocument[i].querySelector('span.Timestamp') ? domDocument[i].querySelector('span.Timestamp').textContent : "no provided timestamp"
        }
        dataArray[i] = dataObject
    }
    dataArray = dataArray.filter(item=>item.headline!="empty")
    console.log("APNews scraped")
    console.log(dataArray)
    return dataArray
}

module.exports = apNews

