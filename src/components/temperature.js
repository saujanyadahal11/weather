import axios from 'axios'
import React, {useEffect, useState} from 'react' 
export default function Temperature({lat, lon, code}) {
  const [result, setResult] = useState("")
  useEffect(()=> {
    getData() 
  },[lat,lon])
  
  async function getData()
  {
    // count=count+1
    // console.log(lat,lon)
    const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5761c5c964f822e742ca2eaacf1d7d0a&units=metric
    `)
    setResult(data)
  }
  console.log(result)

  if(code===1)
  {
    return (
      <div className='temperatureInfo'>
        <h2>{result.name}, {result?.sys?.country}</h2>
        <h3>Temperature: {result?.main?.temp} <sup>o</sup>C</h3>
         <div className="table">
            <table>
              <thead>
                <tr>
                  <th>max-temp</th>
                  <th>min-temp</th>
                  <th>wind</th>
                  <th>pressure</th>
                  <th>humidity</th>
                </tr>
              </thead> 
              <tbody>
                <tr>
                  <td>{result?.main?.temp_min}<sup>o</sup>C</td>
                  <td>{result?.main?.temp_max}<sup>o</sup>C</td>
                  <td>{result?.wind?.speed} meter/sec</td>
                  <td>{result?.main?.pressure} hPa</td>
                  <td>{result?.main?.humidity} %</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
      
      )
  }
  else{
    return (
      <div className='currentInfo'>
        <i className='fas fa-map-marker-alt'></i>
      {result.name} <br />{result?.main?.temp}  <sup>o</sup>C</div>
    )
  }
  }


// link for api:     
// for current temperature: http://api.weatherapi.com/v1/current.json?key=2af49756b67048fea79212056220412&q={lat},{lon
// API key:     517ed9c20b2dc39c54a8179905e9ad34