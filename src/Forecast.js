function Forecast({ forecastData, title }) {

    const renderedForecast = Object.keys(forecastData).map(date => {
        const monthDay = forecastData[date].forecast.forecastday[0].date.slice(5);
        return (
            <div className="forecast-details">
                <img src={forecastData[date].forecast.forecastday[0].day.condition.icon} alt="icon"></img>
                <div>{monthDay}</div>
                <div>{forecastData[date].forecast.forecastday[0].day.condition.text}</div>
            </div>
        );
    });

    return (
        <section>
            <h2>{title}</h2>
            <div className="forecast">
                {renderedForecast}
            </div >
        </section>
    );
}

export default Forecast;