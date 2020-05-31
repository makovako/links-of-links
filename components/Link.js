import React, {useState} from 'react'


export default function Link({link}) {
    const [description, setDescription] = useState(false);

    function toggleDescription(e) {
        e.preventDefault()
        setDescription(!description)
    }

    return (
        <a target="_self" href={link.url} norefferer="true" noopener="true" nofollow="true">
            <h2>{link.title}<span>x</span></h2>
            <p>{link.excerpt}</p>
            {description ? (<p>{link.description}</p>) : null}
            <span onClick={toggleDescription}>{description ? "x" : "i"}</span>
        </a>
    )
}
