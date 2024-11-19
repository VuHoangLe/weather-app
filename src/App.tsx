import React, { useState } from "react";
import "./App.css";
import WeatherBox from "./components/WeatherBox";
import { defaultCities } from "./constants";
import { City } from "./interfaces";
import { getWeatherData } from "./services";

const App: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [cities, setCities] = useState<City[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>("");

    // Fetch Weather Data
    const fetchWeatherData = async (cityName: string): Promise<City | null> => {
        try {
            setLoading(true);
            setError(null);

            const weatherData = await getWeatherData(cityName);
            return weatherData;
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to fetch weather data");
            return null;
        } finally {
            setLoading(false);
        }
    };

    // City Selection
    const handleCitySelect = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const cityName = event.target.value;
        setSelectedCity(cityName);
        const weatherData = await fetchWeatherData(cityName);
        if (weatherData && !cities.find((city) => city.name === weatherData.name)) {
            setCities((prevCities) => [weatherData, ...prevCities]);
        }
    };

    const removeOption = (name: string) => {
        setCities((prevCities) => prevCities.filter((city) => city.name !== name));
        if (selectedCity === name) {
            setSelectedCity("");
        }
    };

    return (
        <div className="weather-app">
            <div className="search-container">
                <select value={selectedCity} onChange={handleCitySelect} className="city-select">
                    <option value="">Select city</option>
                    {defaultCities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <div>Currently selected city</div>
                <div className="weather-cards">
                    {loading && <div className="loading">Loading...</div>}
                    {error && <div className="error">{error}</div>}
                    {cities.map((city) => (
                        <WeatherBox city={city} onRemove={() => removeOption(city.name)} key={city.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
