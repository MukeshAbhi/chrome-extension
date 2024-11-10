
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import { Base_URL } from './config';

interface weatherdata {
  current : {
    condition : {
      icon : URL
    };
    feelslike_c: string;
    humidity: string;
    last_update : string;
    temp_c : string;
    wind_kph: string;  
  };
  location : {
    country : string;
    lat : string;
    localtime: string;
    localtime_epoch: string;
    lon: string;
    name : string;
    region : string;
    tz_id : string;
  }
}

function App() {
  const key = import.meta.env.VITE_API_KEY;
  const BASE_URL = Base_URL;

  const [weatherdata, setWeatherdata] = useState<weatherdata>();
  const [isloading, setIsloading] = useState(true);
  const [img, setImg] = useState<string>();

  useEffect(()=>{
    const fetchData = async()=>{
        const response = await axios.get(`${BASE_URL}/current.json?key=${key}&q=London`)
        const data = response.data;
        console.log(data);
        setWeatherdata(data);
        setIsloading(false);

        const iconUrl = `http:${data.current.condition.icon}`; 
        const imageResponse = await axios.get(iconUrl, { responseType: 'blob' });
        const imageObjectURL = URL.createObjectURL(imageResponse.data);
        setImg(imageObjectURL);
    }
    fetchData();
  },[])



  return (
    isloading ? (<></>) : (
      weatherdata && (
        <div>
            <div>
              <img src={img}  />
            </div>
        </div>
      )
    ) 
    
  )
}

export default App
