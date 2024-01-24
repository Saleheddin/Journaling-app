import React from 'react'
import './home.css'

function Home(){
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Your Daily Journal</h1>
        <p>Start your journey of self-reflection and personal growth.</p>
        <button className="get-started-button">Get Started</button>
        <img src="public/assets/public.png" alt="hero image" />
      </header>
      
    </div>
  )
}

export default Home