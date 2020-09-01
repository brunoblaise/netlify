import React, {useState} from 'react'
import {S6} from './course'
import {
    Link
  } from "react-router-dom";
const Teacherlog = () => {

    const [name, setName] = useState('');
const [hour, setHour] = useState('');
const [open, setOpen] = useState(false);

const  onsubmit =e =>{
  e.preventDefault();
  const created={
    name: name,
      hour:hour
  }
  setOpen(true)

  S6(created)
}
    return (

        
        <div className="teach">
                <form onSubmit={onsubmit}>
			
            <input
                type="text"
                name="username"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter teacher name..."
                required
            />


            <input
                type="text"
                name="hour"
                value={hour}
                onChange={e => setHour(e.target.value)}
                placeholder="Enter an hour..."
                required
            />
            <button type="submit" className="btn">Continue</button>
            <h1>{open ?<Link  to="/teach/home">go home..</Link> : 'no access' }</h1>
          </form>
        </div>
    )
}

export default Teacherlog
