# Weather App

A simple weather application that allows users to view weather information for multiple cities. The app displays current temperature, wind speed, and air quality for each city, as well as a search functionality to add new cities.

## Features

-   View the current weather for a list of default cities.
-   Add and view the weather for additional cities.
-   Displays temperature, wind speed, and air quality for each city.
-   Responsive design for better usability on mobile devices.

## Technologies Used

-   **React**: For building the user interface.
-   **TypeScript**: For type safety and better development experience.
-   **OpenWeatherMap API**: For fetching weather data.
-   **CSS**: For styling the app.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/VuHoangLe/weather-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd weather-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Create an `.env` file in the root directory of the project and add your OpenWeatherMap API key:

    ```plaintext
    VITE_API_KEY=728721b950a31408dd78349c16f26c12
    VITE_BASE_URL=https://api.openweathermap.org/data/2.5/weather
    ```

5. Run the development server:

    ```bash
    npm run dev
    ```

6. Open your browser and visit `http://localhost:3000` to see the app in action.

## How It Works

1. **Add New Cities**: Users can select a city from a dropdown to view its weather data. The selected city will be added to the list.
2. **Weather Data**: For each city, the app displays:
    - Current temperature (in Celsius)
    - Wind speed (in meters per second)
    - Air quality (a randomly generated value)
3. **Error Handling**: If there is an issue fetching the weather data (e.g., city not found), an error message is displayed.

## Contributing

Feel free to fork the project and submit pull requests. For any issues or feature requests, open an issue in the GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
