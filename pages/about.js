import React from 'react'
import Footer from '../components/Footer'
import { Header } from '../components/Header'

function about() {
    return (
        <>
            <Header />
            <div>
                <h1>About Shivesh</h1>
                <section>
                    I am a front end developer currently achieving full stack
                    development. I have a passion for learning new technologies
                    and solving problems. I am currently working on a project
                    called <a href="https://www.realshivesh.com">RealShivesh</a>
                    where I am building a website for a startup.
                </section>
                <section>
                    <h2>Skills</h2>
                    <div>
                        I try to stay humble instead of boasting my skills
                    </div>
                </section>
                <section>
                    <h2>Experience</h2>
                    <div>
                        I have worked on a few projects and have been working on
                        a few projects.
                    </div>
                </section>
                <section>
                    <h2>Education</h2>
                    <div>
                        I have completed my Bachelors in Computer Science from{' '}
                        <a href="https://www.iitb.ac.in">
                            Indian Institute of Technology, Bombay
                        </a>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default about
