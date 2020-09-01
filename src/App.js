import React from 'react';
import './App.css';
import Login from './components/login';
import Class from './components/class';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bodys1 from './components/s1';
import Bodys2 from './components/s2';
import Bodys3 from './components/Qs3';
import Es1 from './components/Es1';
import Es2 from './components/Es2';
import Es3 from './components/Es3';
import Books from './components/Books';
import Teacherlog from './components/Teacherlog';
import Teacherhome from './components/Teacherhome';
import As1 from './components/Es1e';
import As2 from './components/Es2e';
import As3 from './components/Es3e';
import All from './components/All';
import Es1e from './components/As1';
import Es2e from './components/As2';
import Es3e from './components/As3';
function App() {
 

  return (
    <Router>
    <>
 
 <Login />

 <Route path="/home" exact component={Class} />
 <Route path="/home/s1" exact component={Bodys1} />

 <Route path="/home/s2" exact component={Bodys2} />
 <Route path="/home/s3" exact component={Bodys3} />

 <Route path="/home/books" exact component={Books} />

 <Route path="/home/s1/:id"  component={Es1} />
  <Route path="/home/s2/:id" component={Es2} />
  <Route path="/home/s3/:id" component={Es3} />

  <Route path="/teach" exact component={Teacherlog} />
  <Route path="/teach/home" exact component={Teacherhome} />
  <Route path="/teach/home/s1" exact component={As1} />
<Route path="/teach/home/s2" exact component={As2} />
<Route path="/teach/home/s3" exact component={As3} />
<Route path="/home/all" exact component={All} />

<Route path="/s1/:id" exact component={Es1e} />
<Route path="/s2/:id" exact component={Es2e} />
<Route path="/s3/:id" exact component={Es3e} />
    </>
    </Router>
  );
}

export default App;

