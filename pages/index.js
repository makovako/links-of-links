import data from '../data/links'
import Topic from './components/Topic'

export async function getStaticProps(context) {
  return {
    props: {data},
  }
}


export default function Home({data}) {
  console.log({data});
  return (
    
    <div className="container">
      {data.map(topic => (
        <Topic key={topic.topic} topic={topic}/>
      ))}
    </div>
  )
}
