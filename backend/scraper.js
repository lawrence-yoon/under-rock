const fetch = require("node-fetch")
const jsdom = require("jsdom")
const {JSDOM} = jsdom

//fetch is promise based, so we can use async await, or we can use then catch
fetch('https://apnews.com/hub/world-news')
    .then(response=>response.text())
    .then(data=>{
        const domParsed = new JSDOM(data)
        //im going to try to iterate through the parent node FeedCard. then get the associated h2 and a and p. of the node. grab the alt from the image if possible.
        //see old puppeteer scraper for exact querying. however, the image seems to be under div.feedcard > a > div.media-placeholder > img --- i think there might be a method to grab the 'alt'
        const domDocument = domParsed.window.document.querySelectorAll('div.FeedCard')
        for(let i=0;i<domDocument.length;i++){
            console.log("Article " + (i + 1))
            console.log(domDocument[i].querySelector('h2') ? domDocument[i].querySelector('h2').textContent : "empty")
            console.log(domDocument[i].querySelector('a') ? "https://apnews.com" + domDocument[i].querySelector('a').href: "no provided hyperlink")
            console.log(domDocument[i].querySelector('p') ? domDocument[i].querySelector('p').textContent : "no provided summary")
            console.log(domDocument[i].querySelector('span.Timestamp') ? domDocument[i].querySelector('span.Timestamp').textContent : "no provided timestamp")
        }
    })
    .catch(error=>console.log(error))


