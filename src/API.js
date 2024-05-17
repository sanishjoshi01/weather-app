import axios from "axios";

const fetchWeather = async (location, type, dt, days) => {
    const response = await axios.get(`https://api.weatherapi.com/v1/${type}.json`,
        {
            params: {
                key: "e86d53568db9494fab973320241505",
                q: location,
                dt: dt,
                days: days
            }
        }
    );
    return response.data;
}

export default fetchWeather;