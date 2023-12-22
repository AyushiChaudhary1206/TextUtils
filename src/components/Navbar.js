import React from 'react'
import { Link} from "react-router-dom";

export default function hello(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-a" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-a" to="/about">{props.about}</Link>
        </li>
        
        
      </ul>
      <div className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button className="btn btn-primary mx-3 " style={ {height:'30px'}} onClick={props.red}></button>
        <button className="btn btn-secondary mx-3" style={ {height:'30px'}} onClick={props.yellow} ></button>
        <button className="btn btn-danger mx-3 " style={ {height:'30px'}} onClick={props.blue}  ></button>
      
        <button className="btn btn-warning mx-3 " style={ {height:'30px'}} onClick={props.success}  type="submit"></button>
        </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
         <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
       </div>
    </div>
  </div>
</nav>
  );
}

