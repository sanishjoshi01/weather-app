import { FaMapMarkerAlt } from "react-icons/fa";

function CurrentWeather({ weatherData }) {
    const country = weatherData.location.country;           //Country Name
    const region = weatherData.location.name;               //Region Name

    const timestamp = weatherData.location.localtime;       //Time
    const date = new Date(timestamp);
    const currentDate = date.toDateString();

    const currentTemperature = weatherData.current.temp_c;  //26 in Celsius
    const condition = weatherData.current.condition.text;   //Party Cloudy,Sunny
    const icon = weatherData.current.condition.icon

    const feels_like = weatherData.current.feelslike_c;     //Feels Like in degree

    return (
        <section>
            <div className="current-weather">
                <div className="weather-detail">
                    <div className="location"><FaMapMarkerAlt /> {`${region}, ${country}`}</div>
                    <p className="current-date">{currentDate}</p>
                </div>
                <div className="current-temperature">{currentTemperature}<sup className="celsius">°C</sup></div>
                <div className="feels-like">
                    <img src={icon} alt="icon"></img>{`${condition} (Feels like ${feels_like}°C)`}
                </div>
            </div>
        </section>
    );
};

export default CurrentWeather;