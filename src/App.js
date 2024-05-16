import { useState } from "react";
import fetchWeather from "./API";
import SearchLocation from "./SearchLocation";
import CurrentWeather from "./CurrentWeather";
import WeatherHistory from "./WeatherHistory";
import Forecast from "./Forecast";

function App() {
    const [weatherData, setWeatherData] = useState();
    const [historyData, setHistoryData] = useState([]);
    const [forecastData, setForecastData] = useState([]);
    const [forecastTitle, setForecastTitle] = useState("");
    const [historyTitle, setHistoryTitle] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchForecastData = async (location) => {
        try {
            const today = new Date();
            const pastDates = [...Array(5)].map((_, index) => {
                const date = new Date(today);
                date.setDate(today.getDate() + index);
                return date.toISOString().slice(0, 10);
            });

            const data = {};
            for (const date of pastDates) {
                const response = await fetchWeather(location, 'forecast', date, 5);
                data[date] = response;
            }

            setForecastData(data);
            setLoading(false);
        } catch (error) {
            setError('Error fetching forecast weather data');
        }
    }

    const fetchHistoricalData = async (location) => {
        try {
            const today = new Date();
            const pastDates = [...Array(5)].map((_, index) => {
                const date = new Date(today);
                date.setDate(today.getDate() - index);
                return date.toISOString().slice(0, 10);
            });

            const data = {};
            for (const date of pastDates) {
                const response = await fetchWeather(location, 'history', date);
                data[date] = response;
            }

            setHistoryData(data);
            setLoading(false);
        } catch (error) {
            setError('Error fetching historical weather data');
        }
    };

    const handleSubmit = async (location) => {
        try {
            const currentResult = await fetchWeather(location, 'current');
            setWeatherData(currentResult);

            fetchHistoricalData(location);
            setHistoryTitle("Temperature History (Past 5 days)");

            fetchForecastData(location);
            setForecastTitle("Daily Forecast");

            setError(null);
            setLoading(true);
        } catch (error) {
            setError("Error fetching weather data.");
        }
    };

    return (
        <div className="main">
            <SearchLocation onSubmit={handleSubmit} />
            {loading && <p>Loading...</p>}
            {error && <div className="error">{error}</div>}
            {!loading && !error && (
                <>
                    {weatherData && <CurrentWeather weatherData={weatherData} />}
                    {forecastData && <Forecast forecastData={forecastData} title={forecastTitle} />}
                    {historyData && <WeatherHistory historyData={historyData} title={historyTitle} />}
                </>
            )}
        </div >
    )
}

export default App;