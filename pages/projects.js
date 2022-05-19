import { Header } from '../components/Header'
import Projects from '../components/Projects'

export default function projects() {
    return (
        <div>
            <Header />
            <section>
                <h1>My projects</h1>
                <div>
                    <div>
                        <Projects />
                    </div>
                </div>
            </section>
        </div>
    )
}
