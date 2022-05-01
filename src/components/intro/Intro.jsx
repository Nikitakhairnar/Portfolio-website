import React from 'react'
import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {

 const textRef = useRef();
 useEffect(() => {
  init(textRef.current, {
   showCursor: false,
   backDelay: 1500,
   backspeed: 60,
   showCursor: true,
   strings: ['Hardworking', 'Passionate', 'curious', 'developer']
  })
 }, [])
 return (
  <div className="intro" id="intro">
   <div className="left">
    <div className="imgContainer">
     <img src="assets/nikitak.png" alt="photo" />
    </div>
   </div>
   <div className="right">
    <div className="wrapper">
     <h2>Hi There, I'm</h2>
     <h1>Nikita Khairnar</h1>
     <h3>Computer Engineer <span ref={textRef}></span></h3>
    </div>
    <a href="#portfolio">
     <img src="assets/down.png" alt="portfolio" />
    </a>
   </div>
  </div>
 )
}
