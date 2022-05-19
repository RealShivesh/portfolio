import WeatherCard from './WeatherCard'

export const Hero = () => {
    return (
        <div>
            <section>
                <h1>
                    I try to solve problems using <br />
                    codes and technologies.
                </h1>

                <button>Download resume</button>
            </section>
            <section>
                <WeatherCard />
            </section>
            <section>
                <h2>Things to improve in this page</h2>
                <div>
                    1. Update the one-liner description about me with animations
                    3. Update the resume buttons 4. Thought of the day
                </div>
            </section>
        </div>
    )
}
