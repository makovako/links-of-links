import React from 'react'
import Link from './Link'

export default function Topic({topic, setModal}) {
    return (
        <div id={topic.topic} className="links-group">
            <h1>{topic.title}</h1>
            <div className="links">
                {topic.links.map(link => (
                    <Link key={link.title.replace(/^\s+|\s+$/g, '').toLowerCase()} link={link} setModal={setModal}/>
                ))}
            </div>
        </div>
    )
}
