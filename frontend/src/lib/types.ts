export interface CurrentWeather {
    coord: {
      lon: number;
      lat: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
    };
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }
  
  export interface DayForecast {
    date: string;
    day: string;
    min_temp: number;
    max_temp: number;
    humidity: number;
    description: string;
    icon: string;
    hourly: HourlyForecast[];
  }
  
  export interface HourlyForecast {
    time: string;
    temp: number;
    humidity: number;
    description: string;
    icon: string;
    wind_speed: number;
  }
  
  export interface Forecast {
    city: {
      id: number;
      name: string;
      coord: {
        lat: number;
        lon: number;
      };
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
    };
    days: DayForecast[];
  }
  
  export type Units = 'metric' | 'imperial';