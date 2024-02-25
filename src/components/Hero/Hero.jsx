import React from 'react'
import './Hero.css'
import heroImg from '../../imgs/man.png'


const Hero = () => {
  return (
    <section className='hero dark:bg-gradient-to-r dark:from-simdarkmain dark:to-darkmain'>
      <div className="container mx-auto flex items-center justify-center gap-6 lg:gap-16 flex-col lg:flex-row">
        <div className="hero-content">
          <h4 className='dark:text-lite'>Hello, I'm</h4>
          <h1>Mostafa Sakr</h1>
          <h4 className='dark:text-lite'>Front End developer</h4>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero