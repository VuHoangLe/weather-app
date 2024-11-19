// Types
export interface WeatherData {
    name: string;
    main: {
        temp: number;
    };
    wind: {
        speed: number;
    };
    weather: {
        main: string;
        description: string;
    }[];
}

export interface City {
    name: string;
    temp: number;
    windSpeed: number;
    airQuality: number;
}
