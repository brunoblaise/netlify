import React from 'react'
import Bar from './Bar';
import EntrepreuneurshipS1 from './images/Entrepreuneurship S1 SB.pdf'
import FRENCHS1 from './images/FRENCH S1 SB.pdf'
import BiologyS1 from './images/Biology S1 SB (1).pdf'
import GeograpgyS1 from './images/Geograpgy  S1 SB.pdf'
import HistoryS1 from './images/History S1 SB.pdf'
import ICS1 from './images/ICT S1 SB.pdf'
import KinyarwandS1 from './images/Kinyarwanda S1 SB.pdf'
import KiswahilS1  from './images/Kiswahili S1 SB.pdf'
import LiteratureS1 from './images/Literature in English S1 SB.pdf'
import MathsS1 from './images/Maths S1 SB.pdf'
import PhysicsS1  from './images/Physics S1 SB.pdf'

import {
    Link
  } from "react-router-dom";
const Books = () => {
    return (
        <>
             <Bar/>
             <div className="yyu">
             <div className="bo">
                 <h1>an Online Session</h1>
                 <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                 <h2>Start learning today</h2>
             </div>
             <div className="hr">
                 <hr/>
                 <div className="inner">
            <Link to={EntrepreuneurshipS1} className="a  wy">Entrepreuneurship S1</Link>
            <Link to={FRENCHS1}  className="a  wy">FRENCH S1</Link>
            <Link to={BiologyS1} className="a  wy">Biology S1</Link>
            <Link to={GeograpgyS1}  className="a  wy">Geograpgy S1</Link>
            <Link to={HistoryS1} className="a  wy">History S1</Link>
            <Link to={ICS1}  className="a  wy">ICt S1</Link>
            <Link to={KinyarwandS1} className="a  wy">Kinyarwand S1</Link>
            <Link to={KiswahilS1}  className="a  wy">Kiswahil S1</Link>
            <Link to={LiteratureS1} className="a  wy">Literature S1</Link>
            <Link to={MathsS1}  className="a  wy">Maths S1</Link>
            <Link to={PhysicsS1 } className="a  wy">Physics S1</Link>
          
                 </div>
                
             </div>
             </div>
        </>
    )
}

export default Books
