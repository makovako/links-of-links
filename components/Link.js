import React, {useState} from 'react'


export default function Link({link, setModal}) {

    function infoClicked(e) {
        e.preventDefault()
        setModal(link)
    }

    return (
        <a target="_self" href={link.url} norefferer="true" noopener="true" nofollow="true">
            <h2>{link.title}<span>x</span></h2>
            <p>{link.excerpt}</p>
            <span onClick={infoClicked}>i</span>
        </a>
    )
}
