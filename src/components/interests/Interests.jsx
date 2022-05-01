import React from 'react'
import './interests.scss'

export default function Courses() {
 return (
  <div className="interests" id="interests">
   <div className="slider">
    <div className="container">
     <div className="item">
      <div className="heading">
       <h1>Interests</h1>
      </div>
      {/* <div className="innerItem">
       <div className="left">
        <div className="leftContainer">
         <div className="imgContainer">
          <img src="assets/mobile.png" alt="" />
         </div>
        </div>
       </div>
       <div className="right"></div>
      </div> */}
      <div className="innerContainer">
       <div className="box1">
        <img src="assets/mobile.png" alt="" />
        <h2>Android <br /> Development</h2>
       </div>
       <div className="box2">
        <img src="assets/webdev2.png" alt="" />
        <h2>Web <br /> Development</h2>
       </div>
       <div className="box3">
        <img src="assets/problem.png" alt="" />
        <h2>Problem<br /> solving</h2>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}
