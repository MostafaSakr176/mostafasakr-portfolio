import React from 'react'
import './Hero.css'
import heroImg from '../../imgs/man.png'


const Hero = () => {
  return (
    <section className='hero dark:bg-gradient-to-b dark:from-darkmain dark:to-simdarkmain transition-all'>
      <div className="hero-content container mx-auto flex items-center justify-center gap-6 lg:gap-16 flex-col lg:flex-row">
        <div>
          <h3 className='dark:text-lite'>Hello, I'm</h3>
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