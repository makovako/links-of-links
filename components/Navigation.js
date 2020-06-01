import React from 'react'

export default function Navigation({data}) {
    return (
        <nav>
            <span>Topics: </span>
            {data.map(topic => (<a href={"#" + topic.topic} key={topic.topic}>{topic.title}</a>))}
        </nav>
    )
}
