import React from 'react'

export default function Link({link}) {
    return (
        <a target="_self" href={link.url} norefferer="true" noopener="true" nofollow="true">
            <h2>{link.title}</h2>
            <p>{link.excerpt}</p>
        </a>
    )
}
