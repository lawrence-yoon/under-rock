import React, {useState, useEffect} from 'react'

//need to add some additional styling. better ui/ux
//maybe add some styling for a circle border. dynamic radius-es (radii?) until certain min resolution, too big not good. 
function Greeting() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const goodGreeting = function(){
    let milTimeHours = currentTime.toLocaleTimeString("en-US", {hour12:false}).slice(0,2)
    if(0<=milTimeHours && milTimeHours<=5){
      return "Burning the Midnight Oil, Larry?"
    }
    if(6<=milTimeHours && milTimeHours<=12){
      return "Good Morning, Larry."
    }
    if(13<=milTimeHours && milTimeHours<=17){
      return "Good Afternoon, Larry."
    }
    if(18<=milTimeHours && milTimeHours<24){
      return "Good Evening, Larry."
    }
    return "error"
  }

  useEffect(()=>{
    setInterval(()=> setCurrentTime(new Date()), 1000)
  },[])
  return (
    <div className='clock'>
        <h1 className='time'>{currentTime.toLocaleTimeString("en-US").slice(0,8)}</h1>
        <h2 className='good-greeting'>{goodGreeting()}</h2>
        <h2>Queens, NY</h2>
    </div>
  )
}

export default Greeting