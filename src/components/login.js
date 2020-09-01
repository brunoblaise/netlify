import React, {useState} from 'react'
import {S5} from './course'
import {
    Link
  } from "react-router-dom";
const Login = () => {

const [name, setName] = useState('');
const [day, setDay] = useState('');
const [hour, setHour] = useState('');
const [clas, setClas] = useState('');
const [open, setOpen] = useState(false);

const  onsubmit =e =>{
  e.preventDefault();
  const created={
    name: name,
     day:day,
      hour:hour,
      clas:clas
  }
  
  setOpen(true)

  S5(created)
}

    return (
        <>
        <div className="fot">     
        <form onSubmit={onsubmit}>
			
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
                            name="day"
                            value={day}
                            onChange={e => setDay(e.target.value)}
							placeholder="Enter a day..."
							required
						/>
                      
						<input
							type="number"
                            name="hour"
                            value={hour}
                            onChange={e => setHour(e.target.value)}
							placeholder="Enter an hour..."
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
				
					<button type="submit" className="btn">Continue</button>
                    <h1>{open ?<Link  to="/home">continue..</Link> : 'no access' }</h1>
                    
				</form>
            
        </div>
            <div className="private">
            <h1>Welcome to private study</h1>
            <p>Take revesion of your lessons in simplified way</p>
            <h2>If you are a teacher click here: <Link to="/teach">Follow</Link></h2>
        </div>
        </>
    )
}

export default Login
