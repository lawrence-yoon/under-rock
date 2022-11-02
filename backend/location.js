//i want to include component, might be on the client side actually. 
//but its a component that sends ur location based on ip address. 
//i know that there is an alert sometimes for apps that want your location

//okay, looking it up, there are tools that exist. 
//it takes the ip address you accessed the site with, i am assuming it logs the ip address from the get request. 
//i looked it up before, i believe that to get the ip address it has to do with web sockets.

//https://stackoverflow.com/questions/8107856/how-to-determine-a-users-ip-address-in-node
//according to link above, request object has property called socket. this property also is an object aht has property remoteAddress.
    //request.socket.remoteAddress
//note, they mention that if the server is behind a proxy, the correct method is
    //request.headers['x-forwarded-for']
//also, when using express on Node.js
    //app.set('trust proxy', true)
    //*using this, the req.ip will return real ip address even if behind proxy
    //https://expressjs.com/en/4x/api.html#req.ip
