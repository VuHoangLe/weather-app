import React from "react";
import { City } from "../interfaces";
import RemoveButton from "./RemoveButton";
import { TEMPERATURE } from "../constants";
interface WeatherBoxProps {
    city: City;
    onRemove?: () => void;
}
const WeatherBox: React.FC<WeatherBoxProps> = ({ city, onRemove }) => {
    const determineCardColor = (temperature: number) => {
        if (temperature >= TEMPERATURE.HOT) return "hot";
        if (temperature <= TEMPERATURE.COLD) return "cold";
        return "mild";
    };
    console.log("city", city);
    return (
        <div key={city.name} className={`weather-card ${determineCardColor(city.temp)}`}>
            <div className="city-info">
                <span className="city-name">{city.name}</span>
                <span className="temperature">{city.temp}°C</span>
                {onRemove && <RemoveButton onClick={onRemove} />}
            </div>
            <div className="weather-details">
                <span className="air-quality">PM10: {city.airQuality}</span>
                <span className="wind">Wind: {city.windSpeed} m/s</span>
            </div>
        </div>
    );
};

export default WeatherBox;
