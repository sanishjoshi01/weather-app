import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

function CurrentWeather({ weatherData }) {
    console.log(weatherData);
    const country = weatherData.location.country;           //Country Name
    const region = weatherData.location.name;               //Region Name

    const timestamp = weatherData.location.localtime;       //Time
    const date = new Date(timestamp);
    const currentDate = date.toDateString();

    const currentTemperature = weatherData.current.temp_c;  //26 in Celsius
    const condition = weatherData.current.condition.text;   //Party Cloudy,Sunny
    const icon = weatherData.current.condition.icon

    const feels_like = weatherData.current.feelslike_c;     //Feels Like in degree

    const wind_direction = weatherData.current.wind_dir;
    const wind_kph = weatherData.current.wind_kph;

    return (
        <section>
            <div className="current-weather">
                <div className="weather-detail">
                    <div className="location">
                        <span className="icon">
                            <FaMapMarkerAlt />
                        </span>
                        <div>
                            {`${region}, ${country}`}
                        </div>
                    </div>
                    <p className="current-date">{currentDate}</p>
                </div>
                <div className="details-container">
                    <div className="left-container">
                        <div className="current-temperature">{currentTemperature}<sup className="celsius">°C</sup></div>
                        <div className="condition"><img src={icon} alt="icon"></img>{condition}</div>
                    </div>

                    <div className="right-container">
                        <div className="feels-like">
                            {`Feels like ${feels_like}°C`}
                        </div>
                        <div className="wind-direction">
                            <span className="icon"><FaArrowRight /></span>
                            <div>{wind_direction} wind, {wind_kph} km/h</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentWeather;