import React, { useState } from 'react'
import { fetchWeather } from '../data/FetchWeather'

const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState({})

    const location = 'Mumbai, IN'
    //get current location coordinates
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords
                    fetchWeather(`${latitude},${longitude}`)
                        .then((data) => {
                            setWeatherData(data)
                            console.log(data)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                },
                (err) => {
                    console.log(err)
                }
            )
        } else {
            console.log('Geolocation is not supported by this browser.')
        }
    }

    return (
        <div>
            <h3>Weather of the place</h3>
            <button onClick={getLocation}>Get Weather</button>
            <div>
                {weatherData.current && (
                    <div>
                        <div>
                            <span>{weatherData.current.temp_c}</span>
                            <span>&deg;C</span>
                        </div>
                        <div>
                            <span>{weatherData.current.condition.text}</span>
                            <span>
                                {weatherData.location.name},{' '}
                                {weatherData.location.region},{' '}
                                {weatherData.location.country}
                            </span>
                        </div>
                        <>
                            Forecast
                            {weatherData.forecast.forecastday.map((day) => (
                                <div key={day.date}>
                                    <span>{day.date}</span>
                                    <span>{day.day.condition.text}</span>
                                    <span>{day.day.avgtemp_c}&deg;C</span>
                                    <span>{day.day.maxtemp_c}&deg;C</span>
                                    <span>{day.day.mintemp_c}&deg;C</span>
                                </div>
                            ))}
                        </>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WeatherCard
