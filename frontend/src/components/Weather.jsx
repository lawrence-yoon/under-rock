import React from 'react'

function Weather({weather, temperature, sun}) {
  return (
    <>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="weather icon" />
      <p>{weather.description}</p>
      <p>Sunrise: {sun.rise}</p>
      <p>Sunset: {sun.set}</p>
      <p>Temperature: {temperature.temp}</p>
      <p>Feels like {temperature.feels_like}</p>
      <p>Low of {temperature.temp_min}</p>
      <p>High of {temperature.temp_max}</p>
    </>
  )
}

export default Weather