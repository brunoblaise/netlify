import React, {useState} from 'react'
import {S3} from './course'
import {
    Link
  } from "react-router-dom";
//import Classes from './classes';
export const As3 = () => {
    const [author, setAuthor] = useState('');
    const [syllabus, setSyllabus] = useState('');
    const [body, setBody] = useState('');
    const [exercise, setExercise] = useState('');
    const [subject, setSubject] = useState(''); 
    const [open, setOpen] = useState(false);
 
  const  onsubmit =e =>{
      e.preventDefault();
      const created={
          author: author,
          syllabus:syllabus,
          body:body,
          exercise:exercise,
          subject:subject
      }
      setOpen(true)
      S3(created)
  }
    return (
      <>
      <div className="fot tter">    
        <form onSubmit={onsubmit} className="No">
      <label>
      <h1>author</h1>
        <input
          type="text"
          value={author}
          name="author"
          onChange={e => setAuthor(e.target.value)}
          required
        />
      </label>

      <label>
      <h1>topic</h1>
        <input
          type="text"
          value={syllabus}
          name="syllabus"
          onChange={e => setSyllabus(e.target.value)}
          required
        />
      </label>
      <label>
      <h1>summary</h1>
          <textarea rows="3" 
       type="text"
       value={body}
       name="body"
       onChange={e => setBody(e.target.value)}
       required
        />
      </label>
      <label>
      <h1>exercise</h1>
        <textarea rows="3" 
         type="text"
         value={exercise}
         name="exercise"
         onChange={e => setExercise(e.target.value)}
         required
        />
      </label>
      <label>
      <h1>subject</h1>
        <input
          type="text"
          value={subject}
          name="subject"
          onChange={e => setSubject(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="btn">Submit</button>
      <h1>{open ?<Link  to="/home/all">continue..</Link> : 'no access' }</h1>
    </form>
</div>
    </>
    )
}
export default As3