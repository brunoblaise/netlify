import React from 'react'
import {
    Link
  } from "react-router-dom";
const Body = () => {
    return (
         
        <div className="goe">
<div className="woj">
<p className="les">Welcome to online lessons</p>
<p className="less">Don't Miss out While You Are Away From School</p>

<div className="button">
    <button>
        <Link to="/home/books">
        Books
        </Link>
        </button>
</div>
</div>

<div className="wog">
<img src={require('./images/pexels-oladimeji-ajegbile-3118214.jpg')} alt="studying" className="studying"/>
</div>

        </div>
    )
}

export default Body
