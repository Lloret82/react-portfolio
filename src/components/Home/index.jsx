import  React from 'react'
import { Link, useLocation } from "react-router-dom";
import './index.css'

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        
        <h1 className="main">
          Andrea 
        <p className="sub">Fullstack Developer</p>
        </h1>
        
      </div>
      <div className="person">
        <img
          src="/portfolio.jpg"
          alt="person picture"
        />
        <img src="/mern-stack.png"/>
        </div>
      </div>
   
  )
}

export default Home
