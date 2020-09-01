import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {
  Link
} from "react-router-dom";
import Bar from './Bar';
import Body from './body';
const Bodys1 = () => {
    const [lessons, setLessons] = useState([]);
useEffect( ()=>{
axios.get('/teacher/s1').then(res =>{

  setLessons(res.data.data.results)
 
  
})}, [])




    return (
      <>
        <Bar/>
        <Body/>
    <div className="flex">
      <h1>S1</h1>
    {
      lessons.map(less=>(
        <Link  to={`/home/s1/${less.id}`}  
        className="L202Xe " key={less.id}>
          <div className="img">
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="48.7 61.6 102.6 90.9" viewBox="48.7 61.6 102.6 90.9" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-labelledby="comp-k8ykrxer-svgtitle"><title id="comp-k8ykrxer-svgtitle"></title>
  <g>
      <path fill="#ff7648" d="M75.2 61.6V69l-14.3-7.4v5.9l38.2 13.1-23.9-19z" data-color="1"></path>
      <path fill="#ff7648" d="M139.1 61.6L125 68.9v-7.3l-24.1 19 38.2-13.1v-5.9z" data-color="1"></path>
      <path fill="#192a88" d="M139.1 67.5l-38.2 13.1-.9.3-.9-.3-38.2-13.1-12.2-4.2v71.6l51.3 17.6 51.3-17.6V63.3l-12.2 4.2z" data-color="2"></path>
  </g>
</svg>
          </div>
        <h4  className="look" >{less.author}</h4>
        <h4 className="look1" >{less.subject}</h4>
        <h4  className="look1" >{less.syllabus}</h4>
        </Link>
      ))

    }


    
    </div> 
        </>
    )
   
}


export default Bodys1


