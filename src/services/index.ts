import { City, WeatherData } from "../interfaces";
import { fetchData } from "./fetchData";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getWeatherData = async (cityName: string): Promise<City | null> => {
    const url = `${BASE_URL}?q=${cityName}&units=metric&appid=${API_KEY}`;
    const data: WeatherData = await fetchData<WeatherData>(url);

    const randomAirQuality = Math.floor(Math.random() * 200) + 1;

    return {
        name: data.name,
        temp: Math.round(data.main.temp),
        windSpeed: Math.round(data.wind.speed),
        airQuality: randomAirQuality,
    };
};
