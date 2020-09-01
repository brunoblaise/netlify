import React from 'react'
import {
    Link
  } from "react-router-dom";
const Teacherhome = () => {
    return (
        <>
        <div className="fot ter"> 
            <Link to="/teach/home/s1" className="a">s1</Link>
            <Link to="/teach/home/s2" className="a">s2</Link>
            <Link to="/teach/home/s3" className="a">s3</Link>
        </div>
          <div className="private rr">
          <h1>Choose a class to continue</h1>
      </div>
      </>
    )
}

export default Teacherhome
