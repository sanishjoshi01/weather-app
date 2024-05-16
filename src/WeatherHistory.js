import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function WeatherHistory({ historyData, title }) {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (historyData && Object.keys(historyData).length > 0) {
            const dates = Object.keys(historyData).map(date => {
                return historyData[date].forecast.forecastday[0].date;
            });

            const temperatures = Object.keys(historyData).map(date => {
                return historyData[date].forecast.forecastday[0].day.avgtemp_c;
            });

            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartContainer.current.getContext("2d");

            chartInstance.current = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: dates,
                    datasets: [
                        {
                            label: "Average Temperature (°C)",
                            data: temperatures,
                            backgroundColor: "rgba(54, 162, 235, 0.2)",
                            borderColor: "rgba(54, 162, 235, 1)",
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: "Temperature (°C)"
                            }
                        }
                    }
                }
            });
        }
    }, [historyData]);

    return (
        <section>
            <h2>{title}</h2>
            <div>
                <canvas ref={chartContainer} width="20" height="10" />
            </div>
        </section>
    );
}

export default WeatherHistory;
