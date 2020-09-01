import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Bar from './Bar';
import Answer from './answer';
function Es3({match}) {
    const [lesson, setLesson] = useState({});
   
    useEffect( ()=>{
    axios.get(`https://aqueous-mesa-43272.herokuapp.com/teacher/s3/${match.params.id}`).then(res =>{
      setLesson(res.data.data.results)
    })
    }, [])


    return (
      <>
      <Bar/>   
      <div className="page-wrap page-wrap-single">
      <div className="article-and-sidebar">
      <div className="article-content on-light">
      <h3  >{lesson.subject}</h3>
      <h5 className="intro mute">s3</h5>
      <h4  className="intro">{lesson.syllabus}</h4>
     <p>{lesson.body}</p>
<h4 className="intro">{lesson.author}</h4>
<div className="exercise">
<p>{lesson.exercise}</p>
</div>
      </div>
  </div>
  </div> 
  <Answer/>
  </> 
    )
}

export default Es3
