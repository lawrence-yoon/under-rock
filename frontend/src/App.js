import React, {useState, useEffect} from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Weather from './components/Weather'
import NewsAP from './components/NewsAP';
import NewsYC from './components/NewsYC';

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  //i want to insert a prompt, prompting whoever to input name

  //maybe make a "timeNow" state, stick it in useEffect, live updating.
  //i tried taking out the brackets at the end of useEffect, but then it just kept calling.
  //need to look further into useEffect
  
  useEffect(()=>{
    //this fetch is to get the data from the backend, proxy set to 
    //http://localhost:5000
    //get request sent, data received should be json object with three 
    //key value pairs, the keys with array in the name are matched with arrays
    //these arrays should be used to dynamically render components
    //weather should be able to be hardcoded

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


  //the square brackets missing on bottom, so that it can update the time.
  //might consider a different approach, while this renders every second, 
  //it is also sending the get request constantly, as shown in backend terminal

  },[])
  
  if(isLoading) return "Loading..."
  if(error) return "Error!"

  return (
    <>
      <Greeting/>
      <Weather {...data.weatherAPI}/>
      <div className="news-container">
        <div className="posts-container">
          {data.newsYCArray.map((post)=>
              <NewsYC {...post}/>
          )}
        </div>
        <div className="articles-container">
          {data.newsAPArray.map((article)=>
              <NewsAP {...article}/>
          )}
        </div>
      </div>

    </>
  );
}

export default App;
