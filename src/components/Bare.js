import React from 'react'
import {
    Link
  } from "react-router-dom";

const Bare = () => {
    return (
        <>
        <header>
            <nav>
                <ul>
                <h1 className="launcher">Launcher</h1>
                <li><Link className='add' to="/teach/home">
        add a lesson
          </Link></li>
<li> 
<Link className='all'to="/home/all">
 all lesson
          </Link></li>
     
                </ul>
            </nav>
        </header>
     
</>
    )
}

export default Bare
