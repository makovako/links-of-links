import data from '../data/links'
import Topic from '../components/Topic'
import Navigation from '../components/Navigation';
import React, {useState} from 'react'

export async function getStaticProps(context) {
  return {
    props: {data},
  }
}


export default function Home({data}) {
  const [modal, setModal] = useState(null)

  return (
      <div className="container">
        <Navigation data={data}/>
        {data.map(topic => (
          <Topic key={topic.topic} topic={topic} setModal={setModal}/>
        ))}
        {modal && <div className="modal">
          <div className="modal-content">
            <h2>{modal.title}</h2>
            {modal.description.split('\n').map(line => (<p>{line}</p>))}
            <span onClick={() => setModal(null)}>close</span>
          </div>
        </div>}
      </div>
  )
}
