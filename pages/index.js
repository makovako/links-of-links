import data from '../data/links'
import Topic from './components/Topic'
import Navigation from './components/Navigation';

export async function getStaticProps(context) {
  return {
    props: {data},
  }
}


export default function Home({data}) {
  return (
      <div className="container">
        <Navigation data={data}/>
        {data.map(topic => (
          <Topic key={topic.topic} topic={topic}/>
        ))}
      </div>
  )
}
