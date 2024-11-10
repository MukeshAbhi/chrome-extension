export interface weatherdata {
    current : {
      condition : {
        icon : URL
      };
      feelslike_c: string;
      humidity: string;
      last_updated : string;
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