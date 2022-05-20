import React, { useEffect, useState } from 'react'
import { fetchWeather } from '../data/FetchWeather'
import { Card } from '../styles/Globals.styles'

const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState({})

    const location = 'Mumbai, IN'
    //get current location coordinates
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
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

    useEffect(() => {
        getLocation()
    }, [])

    return (
        <div>
            <h3>Weather of the place</h3>

            <div>
                {weatherData.current && (
                    <Card>
                        <div>
                            <span>{weatherData.current.temp_c}</span>
                            <span>&deg;C</span>
                        </div>
                        <div>
                            <div>{weatherData.current.condition.text}</div>
                            <div>
                                {weatherData.location.name},{' '}
                                {weatherData.location.region},{' '}
                                {weatherData.location.country}
                            </div>
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
                    </Card>
                )}
            </div>
        </div>
    )
}

export default WeatherCard
