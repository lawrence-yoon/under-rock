import React, {useState, useEffect} from 'react'

function Greeting() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString("en-US"))

  useEffect(()=>{
    setInterval(()=> setCurrentTime(new Date().toLocaleTimeString("en-US")), 1000)
  },[])
  return (
    //i want to include some logic to display Good Morning or something...
    //Also, when I have the barebones app done, i want to make it so i pass through location as well
    <>
        <h2>Hello Larry.</h2>
        <h3>It is currently {currentTime}</h3>
    </>
  )
}

export default Greeting