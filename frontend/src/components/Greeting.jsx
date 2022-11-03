import React from 'react'

function Greeting({currentTime, name}) {
  return (
    //i want to include some logic to display Good Morning or something...
    //Also, when I have the barebones app done, i want to make it so i pass through location as well
    <div>
        <h1>Hello {name}.</h1>
        <h3>It is currently {currentTime} in Queens, US at the time of render.</h3>
    </div>
  )
}

export default Greeting