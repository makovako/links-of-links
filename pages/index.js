export async function getStaticProps(context) {
  return {
    props: {msg: "Hello World"}, // will be passed to the page component as props
  }
}


export default function Home({msg}) {
  // console.log({props});
  return (
    
    <div className="container">
      Hello World
      {msg}

      <style jsx>{`
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
