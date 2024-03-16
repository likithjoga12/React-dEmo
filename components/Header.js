import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import logo from './logo.jpg'
import { NavLink } from 'react-router-dom';


export const Header = () => {
  return (
    <header>
    <div>
        <div className='topbar'>
        <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ul className="pt-3">
                            <li><NavLink href="tel:+91 9133102210"><i className="fa-solid fa-phone"></i> +91 9133102210</NavLink></li>
                            <li><NavLink href="mailto:info@abcd.com"><i className="fa-solid fa-envelope"></i> info@abcd.com</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-6 pt-3">
                       <button>
                        readmor
                       </button>
                    </div>
                </div>
                </div>
            </div>
    </div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <NavLink className="navbar-brand" href="#">
      <img src={logo} />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Link</NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to="/gallery">Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to="/aboutus">AboutUs</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        
       
      </ul>
     
    </div>
  </div>
</nav>
    </header>
  );
};
