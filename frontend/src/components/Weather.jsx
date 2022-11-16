import React from 'react'

function Weather({weather, temperature, sun}) {
  return (
    <>
      <div className='forecast'>
        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="weather icon" />
        <p>{weather.description}</p>
        <p>Sunrise: {sun.rise}</p>
        <p>Sunset: {sun.set}</p>
      </div>
      <div className='temperature'>
        <p>It is currently <strong className='temp-degrees'>{temperature.temp}</strong></p>
        <p>It feels like <strong className='temp-degrees'>{temperature.feels_like}</strong></p>
        <p>Low of <strong className='temp-degrees'>{temperature.temp_min}</strong></p>
        <p>High of <strong className='temp-degrees'>{temperature.temp_max}</strong></p>
      </div>
    </>
  )
}

export default Weather