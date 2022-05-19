import WeatherCard from './WeatherCard'

export const Hero = () => {
    return (
        <div>
            <section>
                <h1>
                    Welcome to <br />
                    <span>RealShivesh&apos;s</span> <br />
                    <span>Portfolio</span>
                </h1>
                <div>
                    I try to solve problems using <br />
                    codes and technologies.
                </div>
                <button>Download resume</button>
            </section>
            <section>
                <WeatherCard />
            </section>
            <section>
                <h2>Things to improve in this page</h2>
                <div>
                    1. Update the one-liner description about me with animations
                    2. Add current weather API and weather forecast for next
                    three days 3. Update the resume buttons 4. Thought of the
                    day
                </div>
            </section>
        </div>
    )
}
