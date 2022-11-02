const weather = async ()=>{
    const now = new Date()
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=queens&APPID=${process.env.OW_API_KEY}`)
    const data = await response.json()

    //i am thinking of making an entire function thing, that takes in the weatherData in the below format, and converts it depending on location submitted.
    //but for now, its going to be queens.
    const k2F = function(kelvin){
        const fahrenheit = (((kelvin-273.15)*9)/5)+32
        const roundedF = Math.round(fahrenheit)
        return roundedF
    }

    const weatherData = {
        weather: {
            description: data.weather[0].description, 
            icon: data.weather[0].icon
        },
        temperature: {
            temp: k2F(data.main.temp),
            feels_like: k2F(data.main.feels_like),
            temp_min: k2F(data.main.temp_min),
            temp_max: k2F(data.main.temp_max),
            pressure: data.main.pressure,
            humidity: data.main.humidity
        },
        wind: data.wind,
        sun: {
            rise: data.sys.sunrise,
            set: data.sys.sunset
        },
        location: {
            country: data.sys.country,
            city: data.name,
            timezone: data.timezone
        },
        fetchTimestamp: now
    }
    console.log("fetched data from openweather api")
    console.log(weatherData)
    return weatherData

    //time is in unix timestamp...
    //unix timestamp is in UTC aka GMT
    //timezone is shift in seconds from UTC
    //probably just need to take difference, then grab just the hours minutes.
    //in front end, will need to create drop downs.
    //will need a app.post method.  

    //also, for temperatures, i want to make it so if its in USA, temperature automatically converts to F. 
    //if elsewhere, convert to celsius
    //but for now, its going to be fahrenheit and in queens because its for me.
}

module.exports = weather