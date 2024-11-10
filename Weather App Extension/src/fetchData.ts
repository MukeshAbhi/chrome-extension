import { useEffect, useState } from "react";
import { Base_URL } from "./config";
import { weatherdata } from "./weatherdata";
import axios from "axios";

export const useData = ()=>{
    const key = import.meta.env.VITE_API_KEY;
    const base_url = Base_URL;

    const [latitude,setLatitude] = useState<number>();
    const [longitude,setLongitude] = useState<number>();
    const [weatherData, setWeatherData] = useState<weatherdata>();
    const [isLoading, setIsLoading] = useState(true);
    const [img, setImg] = useState<string>();
    
    useEffect(()=>{

        const getUserLocatio =  ()=>{
            navigator.geolocation.getCurrentPosition(
                (position) => {
                     setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                }
            )
        }
    
        getUserLocatio();

        if(latitude && longitude){
            const fetchData = async()=>{
                const response = await axios.get(`${base_url}/current.json?key=${key}&q=${latitude},${longitude}`);
                const data = response.data;
                
                setWeatherData(data);
                setIsLoading(false);
    
                const iconUrl = `http:${data.current.condition.icon}`;
                const imageResponse = await axios.get(iconUrl, {responseType:'blob'});
                const imaageObjectURL = URL.createObjectURL(imageResponse.data);
                setImg(imaageObjectURL);
            }
            fetchData();
        }
    },[latitude,longitude])

    return(
        {weatherData,
        isLoading,
        img}
    )
}

