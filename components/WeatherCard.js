import React, { useEffect, useState } from 'react'
import { fetchWeather } from '../data/FetchWeather'
import { Card } from '../styles/Globals.styles'

const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState({})
    const [query, setQuery] = useState('')

    //get current location coordinates
    // const getLocation = () => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentLocation(
    //             (position) => {
    //                 const { latitude, longitude } = position.coords
    //                 fetchWeather(`${latitude},${longitude}`)
    //                     .then((data) => {
    //                         setWeatherData(data)
    //                         console.log(data)
    //                     })
    //                     .catch((err) => {
    //                         console.log(err)
    //                     })
    //             },
    //             (err) => {
    //                 console.log(err)
    //             }
    //         )
    //     } else {
    //         console.log('Geolocation is not supported by this browser.')
    //     }
    // }

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query)
            console.log(data)
            setWeatherData(data)
            //setQuery('')
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your favourite city"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
            <div>
                {weatherData.current && (
                    <div>
                        <Card>
                            <span>{weatherData.current.temp_c}</span>
                            <span>&deg;C</span>
                            <div>
                                <div>{weatherData.current.condition.text}</div>
                                <div>
                                    {weatherData.location.name},{' '}
                                    {weatherData.location.region},{' '}
                                    {weatherData.location.country}
                                </div>
                            </div>
                        </Card>
                        <>
                            Forecast
                            {weatherData.forecast.forecastday.map((day) => (
                                <Card key={day.date}>
                                    <span>{day.date}</span>
                                    <span>{day.day.condition.text}</span>
                                    <span>{day.day.avgtemp_c}&deg;C</span>
                                    <span>{day.day.maxtemp_c}&deg;C</span>
                                    <span>{day.day.mintemp_c}&deg;C</span>
                                </Card>
                            ))}
                        </>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WeatherCard
