import { ProjectList } from '../data/ProjectList'

const Projects = () => {
    return (
        <div>
            <section>
                <h1>My projects</h1>
                <div>These are my projects.</div>
            </section>
            <section>
                <div>
                    {ProjectList.map((project) => (
                        <div key={project.id}>
                            <h2 className="project-name">
                                <a href={project.link}>{project.name}</a>
                            </h2>
                            <div>{project.description}</div>
                            <div>
                                <button>Source code</button>
                                <button>Demo</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Projects
