import React from 'react'
import {
    Link
  } from "react-router-dom";
const Class = () => {
    return (
        <>
        <div className="fot ter"> 
            <Link to="/home/s1" className="a">s1</Link>
            <Link to="/home/s2" className="a">s2</Link>
            <Link to="/home/s3" className="a">s3</Link>
        </div>
          <div className="private rr">
          <h1>Choose a class to continue</h1>
      </div>
      </>
    )
}

export default Class
