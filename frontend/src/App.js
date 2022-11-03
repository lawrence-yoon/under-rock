import React, {useState, useEffect} from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Weather from './components/Weather'
import NewsAP from './components/NewsAP';
import NewsYC from './components/NewsYC';

function App() {
  const now = new Date().toLocaleTimeString("en-US")
  const initialUserData = {
    name: "larry",
    currentTime: now
  }
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(()=>{
    fetch('/api/news')
      .then(response=>{
        if(response.ok){
          return response.json()
        }
        throw response;
      })
      .then(data=>{
        setData(data)
        console.log(data)
      })
      .catch(error=>{
        console.error("Error fetching data: ", error)
        setError(error)
      })
      .finally(()=>{
        setIsLoading(false)
      })
  },[])
  
  if(isLoading) return "Loading..."
  if(error) return "Error!"

  return (
  <>
    <Greeting 
      {...initialUserData}
    />
    <Weather
      {...data}
    />
    <NewsAP
      {...data}
    />
    <NewsYC
      {...data}
    />
  </>
  );
}

export default App;
