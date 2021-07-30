import  React from 'react'
import './index.css'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        
        <h1 className="main">
        Andrea {''}
          {/* Style will be inherited from the parent element */}
          <Typewriter className="tw"
            words={['FullStack Developer']}
            loop={2}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={() => console.log(`Done after 5 loops!`)}
          />
        </h1>
        
      </div>
      <div className="person">
        <img
          src="/portfolio.jpg"
          alt="person"
        />
        <img src="/mern-stack.png" alt=""/>
        </div>
      </div>
   
  )
}

export default Home
