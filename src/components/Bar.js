import React from 'react'
import {
    Link
  } from "react-router-dom";

const Bar = () => {
    return (
        <>
        <header>
            <nav>
                <ul>
                <h1 className="launcher">Launcher</h1>
                <li><Link className='add' to="/home/books">
         Books lessons
          </Link></li>
<li> 
<Link className='all'to="/home">
lesson
          </Link></li>
     
                </ul>
                <div className="burger burger-slide"><div className="burger-lines"></div></div>
            </nav>
        </header>
     
</>
    )
}

export default Bar
