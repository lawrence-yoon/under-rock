const weather = async ()=>{
    const now = new Date().toLocaleTimeString("en-US")
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=queens&APPID=${process.env.OW_API_KEY}`)
    const data = await response.json()

    const k2F = function(kelvin){
        const fahrenheit = (((kelvin-273.15)*9)/5)+32
        const roundedF = Math.round(fahrenheit)
        const readableF = roundedF + "°F"
        return readableF
    }

    const readableTime = function(unixTime){
        const date = new Date(unixTime*1000)
        const localTime = date.toLocaleTimeString("en-US")
        return localTime
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
            pressure: data.main.pressure + "hPa",
            humidity: data.main.humidity + "%"
        },
        wind: data.wind,
        sun: {
            rise: readableTime(data.sys.sunrise),
            set: readableTime(data.sys.sunset)
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
}

module.exports = weather