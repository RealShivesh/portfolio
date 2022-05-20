import { Column, Row } from '../styles/Globals.styles'
import Quote from './Quote'
import WeatherCard from './WeatherCard'

export const Hero = () => {
    return (
        <div>
            <Row justifyContent="space-around">
                <Column>
                    <h1>
                        I try to solve problems using <br />
                        codes and technologies.
                    </h1>
                    <button>Download resume</button>
                </Column>
                <Column>
                    <WeatherCard />
                </Column>
            </Row>
            <Row>
                <Quote />
            </Row>
        </div>
    )
}
