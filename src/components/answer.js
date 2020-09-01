import React, {useState} from 'react'
import {S4} from './course'
import {
    Link
  } from "react-router-dom";


const Answer = () => {
    const [name, setName] = useState('');
const [clas, setClas] = useState('');
const [sub, setSub] = useState('');
const [question, setQuestion] = useState('');
const [open, setOpen] = useState(false);

const  onsubmit =e =>{
  e.preventDefault();
  const created={
    name: name,
    clas:clas,
    sub:sub,
     question: question
     
  }
  setOpen(true)

  S4(created)
}

    return (
        <form onSubmit={onsubmit} className="bru">
			
        <input
            type="text"
            name="username"
         value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter Student name..."
            required
        />

        <input
            type="text"
            name="class"
            onChange={e => setClas(e.target.value)}
            value={clas}
            placeholder="Enter a class..."
            required
        />

<input
            type="text"
            name="class"
            onChange={e => setSub(e.target.value)}
            value={sub}
            placeholder="Enter a subject..."
            required
        />

   <textarea
            type="text"
            name="hour"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            placeholder="answer...."
            required
        />
    <button type="submit" className="btn">submit</button>
    <h1>{open ?<Link  to="/home">sent..</Link> : 'not submitted' }</h1>
    
</form>
    )
}

export default Answer
