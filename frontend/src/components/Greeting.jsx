import React, {useState, useEffect} from 'react'

function Greeting() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString("en-US"))

  useEffect(()=>{
    setInterval(()=> setCurrentTime(new Date().toLocaleTimeString("en-US")), 1000)
  },[])
  return (
    <div className='clock'>
        <h1 className='time'>{currentTime}</h1>
        <h2>Queens, NY</h2>
    </div>
  )
}

export default Greeting