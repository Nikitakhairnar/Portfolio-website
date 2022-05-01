import React from 'react'
import './projects.scss'

export default function Projects() {
 return (
  <div className="projects" id="projects">
   <h1>My Projects</h1>
   <div className="container">
    <div className="item">
     <img src="assets/drawingapp.jpg" alt="image" />
     <h3>Drawing App</h3>
    </div>

    <div className="item">
     <img src="assets/tictactoe.jpg" alt="image" />
     <h3>Tic Tac Toe</h3>
    </div>

    <div className="item">
     <img src="assets/icecream.jpg" alt="image" />
     <h3>ice-cream shop website</h3>
    </div>

    <div className="item">
     <img src="assets/danceweb.jpg" alt="image" />
     <h3>Dance academy website</h3>
    </div>

    <div className="item">
     <img src="assets/studentProfile.jpg" alt="image" />
     <h3>Student profile system</h3>
    </div>

    <div className="item">
     <img src="assets/mealdelivery.jpg" alt="image" />
     <h3>Meal delivery website</h3>
    </div>
   </div>
  </div>
 )
}
