import { FC } from "react";

interface Weather {
    temp? : string ;
    place? : string;
    humidity? : string;
    img? : string;
    windspeed? : string;
    feels? :string;
    date? : string;
}


export const Weather : FC<Weather> = ({temp,place,humidity,img,windspeed,feels,date})=>{
    return (
        <div className="bg-slate-900  w-60 h-80  ">
            <div className="pt-3">
                <div className="flex justify-center text-4xl text-yellow-100">CS 50</div>
                <div className="flex justify-center ">
                    <img src={img} className="h-20 w-20 mr-2" />
                </div>
                <div className="flex justify-center text-4xl text-yellow-100">{temp} &deg;c</div>
                <div className="flex justify-center text-2xl text-yellow-100">{place}</div>

                <div className="flex justify-evenly pt-4">
                    
                    <div className=" ">
                        <div className="flex justify-center text-l text-yellow-100  ">
                            <img src="images/humidity.jpg" className="h-6 w-6 mr-2 " />
                            <div>{humidity}%</div>
                        </div>
                        <div className="text-xs text-slate-400 pt-1 pl-3">Humidity</div>
                    </div>
                    <div className="  ">
                        <div className="flex justify-center text-l text-yellow-100 ">
                            <img src="images/windspeed.jpg" className="h-7 w-7 mr-2"/>
                            <div>{windspeed} Km/h</div>
                        </div>
                        <div className="text-xs text-slate-400 pl-5">Wind Speed</div>
                    </div>
                </div>
                <div className="flex justify-center text-l text-yellow-100 pt-2">
                    Feels like : {feels} &deg;c
                </div>
                <div className="flex justify-center text-xs text-slate-400">
                    Last Updated : {date}
                </div>
            </div>
        </div>
    )
}