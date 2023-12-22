import './App.css';
import About from './components/About';
import React, { useState } from 'react';


import Navbar from './components/Navbar';

import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Textform from './components/Textform';



function App() {
const remove=()=>{
  document.body.classList.remove("bg-primary");
  document.body.classList.remove("bg-danger");
  document.body.classList.remove("bg-secondary");
  document.body.classList.remove("bg-success");
}
const red=()=>{
  remove();
  document.body.classList.add("bg-primary");
}
const blue=()=>{
  remove();
  document.body.classList.add("bg-danger")
}

const yellow=()=>{
  remove();
  document.body.classList.add("bg-secondary")
}
const success=()=>{
  remove();
  document.body.classList.add("bg-success");
}




  const[mode,setMode]=useState('light');
 const[alert,setAlert]=useState(null);
  
const setalert=(message,type)=>{
setAlert({
  msg:message,
  type:type,
}
)
setTimeout(() => {
  setAlert(null);
},3000);
}

 const togglemode=()=>{
  remove();
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor="grey";
    setalert("dark mode enabled","success")
    document.title="textutils-dark mode";
  }
  else{
    setMode('light')
    document.body.style.backgroundColor="white";
    setalert("light mode enabled","success");
  }
}
  return (
    <>
 <Router>
<Navbar title="TextUtils" about="About Us" mode={mode} red={red} blue={blue} success={success} yellow={yellow} togglemode={togglemode} />
<Alert alert={alert} />
<div className="container">
<Routes>
          <Route path="/about" element={
            <About mode={mode}/>}>
          </Route>
         
          <Route path="/" element={
          <Textform mode={mode} setAlert={setalert}/>}>
           
          </Route>
        </Routes>
        </div>
</Router>


</>
  );
}

export default App;

