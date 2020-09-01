import React,{useState, useEffect} from 'react'
import {
  Link
} from "react-router-dom";
import Bar from './Bar';
import axios from 'axios'
import Body from './body';
const Bodys2 = () => {
    const [lessons, setLessons] = useState([]);
useEffect( ()=>{
axios.get('https://aqueous-mesa-43272.herokuapp.com/teacher/s2').then(res =>{

  setLessons(res.data.data.results)
 
  
})}, [])




    return (
      <>
      <Bar/>
      <Body/>
      <div className="flex">
      <h1>S2</h1>
    {
      lessons.map(less=>(
        <Link  to={`/home/s2/${less.id}`}  
         className="L202Xe " key={less.id}>
          <div className="img1">
          <svg preserveAspectRatio="xMidYMid meet"  data-bbox="56.372 51.1 87.854 98.4" viewBox="56.372 51.1 87.854 98.4" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-labelledby="comp-k8x4pibo-svgtitle"><title id="comp-k8x4pibo-svgtitle"></title>
    <g>
        <path d="M142.3 132l-30.4-45.1c-2.1-3.2-3.3-6.9-3.3-10.8V53.4H92v22.7c0 3.8-1.1 7.6-3.3 10.8L58.3 132c-5 7.5.3 17.5 9.3 17.5h65.3c9.1 0 14.4-10 9.4-17.5z" fill="#192a88" data-color="1"></path>
        <path d="M106.8 107.9h-13l-13.1 19.4c-1.8 2.7.1 6.2 3.3 6.2h32.4c3.2 0 5.1-3.6 3.3-6.2l-12.9-19.4z" fill="#fec178" data-color="2"></path>
        <path d="M112.1 51.1H88.6c-4.5 0-8.2 3.7-8.2 8.2 0 4.5 3.7 8.2 8.2 8.2h23.5c4.5 0 8.2-3.7 8.2-8.2 0-4.5-3.7-8.2-8.2-8.2z" fill="#192a88" data-color="1"></path>
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


export default Bodys2


