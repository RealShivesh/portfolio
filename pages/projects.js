import { Header } from '../components/Header'

export default function projects() {
    return (
        <div>
            <Header />
            <section>
                <h1>My projects</h1>
                <div>
                    <div>
                        {['pehla project', 'dusra project', 'teesra waala'].map(
                            (project) => (
                                <>
                                    <h2>{project}</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed euismod, urna eu
                                        tincidunt consectetur, nisl nunc aliquet
                                        nunc, eget egestas nisl nunc euismod
                                        nunc. Pellentesque habitant morbi
                                        tristique senectus et netus et malesuada
                                        fames ac turpis egestas.
                                    </p>
                                </>
                            )
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}
