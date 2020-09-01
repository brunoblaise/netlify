import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Bare from './Bare';
function Es1e({match}) {
    const [lesson, setLesson] = useState({});
  
    useEffect( ()=>{
    axios.get(`https://aqueous-mesa-43272.herokuapp.com/teacher/s1/${match.params.id}`).then(res =>{
      setLesson(res.data.data.results)
    })
    }, [])
 


    return (
      <>
      <Bare/>
   
        <div className="page-wrap page-wrap-single">
          <div className="article-and-sidebar">
          <div className="article-content on-light">
          <h3  >{lesson.subject}</h3>
          <h5 className="intro mute">s1</h5>
          <h4  className="intro">{lesson.syllabus}</h4>
         <p>{lesson.body}</p>
    <h4 className="intro">{lesson.author}</h4>
    <div className="exercise">
    <p>{lesson.exercise}</p>
  
    </div>
          </div>
      </div>
      </div> 
    
      </>      
    )
}

export default Es1e
