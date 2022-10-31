const fetch = require("node-fetch")
const jsdom = require("jsdom")
const {JSDOM} = jsdom

//fetch is promise based, so we can use async await, or we can use then catch
fetch('https://apnews.com/hub/world-news')
    .then(response=>response.text())
    .then(data=>{
        const domParsed = new JSDOM(data)
        const domDocument = domParsed.window.document.querySelectorAll('div.FeedCard h2')
        for(let i=0;i<domDocument.length;i++){
            console.log(domDocument[i].textContent)
        }
    })
    .catch(error=>console.log(error))


