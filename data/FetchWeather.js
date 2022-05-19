import axios from 'axios'

const URL = 'http://api.weatherapi.com/v1/forecast.json'
const API_KEY = 'ec23985353b949c581e173232220505'

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            aqi: 'yes',
            key: API_KEY,
            days: 5,
        },
    })

    return data
}
