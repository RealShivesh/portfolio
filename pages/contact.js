import Image from 'next/image'
import React from 'react'
import { Header } from '../components/Header'
import { SocialLinks } from '../data/SocialLinks'

function contact() {
    return (
        <div>
            <Header />
            <section>
                <h1>Contact</h1>
                <div>
                    {SocialLinks.map((link) => (
                        <div key={link.id}>
                            <a href={link.link}>
                                <link.icon />
                            </a>
                            <div>{link.name}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default contact
