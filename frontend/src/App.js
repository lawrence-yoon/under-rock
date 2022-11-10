import React, {useState, useEffect} from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Weather from './components/Weather'
import NewsAP from './components/NewsAP';
import NewsYC from './components/NewsYC';
import Navbar from './components/Navbar';

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(()=>{
    //this fetch is to get the data from the backend, proxy set to 
    //http://localhost:5000
    //get request sent, data received should be json object with three 
    //key value pairs, the keys with array in the name are matched with arrays
    //these arrays should be used to dynamically render components

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
      <Navbar/>
      <div className='weather'>
        <Greeting/>
        <Weather {...data.weatherAPI}/>
      </div>
      <div className="news-container">
        <div className="articles-container">
        <h2 style={{alignSelf: "flex-start", margin: "8px", padding: "8px", flexBasis:"100%"}}  id='ap'>AP News - International</h2>
        <br />
          {data.newsAPArray.map((article)=>
              <NewsAP {...article}/>
          )}
        </div>
        <div className="posts-container">
        <h2 style={{alignSelf: "flex-start", paddingLeft: "24px", paddingTop: "8px", marginTop: "8px", marginBottom: "24px"}} id='yc'>YCombinator News</h2>

          {data.newsYCArray.map((post)=>
              <NewsYC {...post}/>
          )}
        </div>
      </div>

    </>
  );
}

export default App;
