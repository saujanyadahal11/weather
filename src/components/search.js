import React , {useState}from 'react'
import axios from 'axios'
import Temperature from './temperature';
import logo from '../image/bg.jpg';
import Location from './location';
export default function Search() {
  const [address, setAddress] = useState("")
  const [lat, setLat] = useState("")
  const [lon, setLon] = useState("")
  async function handleClick()
  {
    // console.log("clicked")
    let point = await getData(address)
    setLat(point[0]?.lat)
    setLon(point[0]?.lon)
  }
  return (
    <div className='showTemp'>
      <div className="left">
        <div className="showImg">
          <img src={logo} alt={logo} />
        </div>
        <div className='currentTemperature'>
        {<Location/>}
        </div>
        <div className="search">
          <input className="search-box" type="text" name="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
          <button className="button" onClick={handleClick}>Search</button>
        </div>
      </div>
      <div className="temperature right">
        {lat && <Temperature  lat={lat} lon={lon} code={1}/>}
      </div>
    </div>
  )
}

async function getData(address)
{
  const {data}= await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${address}&appid=7866f376bde0e9f4df7f9570d27c340e`) 
  return (data)
  }

  
// api key: 7ecf27d7b7d44f38823aba4b3d5e555c
// api: https://api.geoapify.com/v1/geocode/search?text=Berlin&lang=en&limit=10&type=city&apiKey=7ecf27d7b7d44f38823aba4b3d5e555c