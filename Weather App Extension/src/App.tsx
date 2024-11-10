import './App.css'
import { useData } from './fetchData';
import { Weather } from './Weather'

function App() {
  
  const {weatherData, isLoading, img} = useData();
  return (
    <>
      {isLoading ? (<div></div>) : (
        <Weather temp={weatherData?.current.temp_c}
        img={img}
        humidity={weatherData?.current.humidity}
        feels={weatherData?.current.feelslike_c}
        date={weatherData?.current.last_updated}
        windspeed={weatherData?.current.wind_kph}
        place={weatherData?.location.name}
         />
      )}
    </>
  )
}

export default App
