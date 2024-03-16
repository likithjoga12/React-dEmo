import React from 'react'
import { NavLink } from 'react-router-dom'
import "./main.css"


const Sidebar = () => {
  return (
    <div >
        <ul className="sidebar"> 
            <li>
              <NavLink to="" >AddStudent</NavLink></li>
            <li>
              <NavLink to="Deletet" >DeleteStudent</NavLink></li>
            <li> <NavLink to= "editstu"> EditDatastudent</NavLink> </li>
            <li><NavLink to="offer" >Addoffer
              </NavLink></li>
              <li>
              <NavLink to="doffer" >Deleteoffer
              </NavLink></li>
            

        </ul>
    </div>
  )
}
export default Sidebar;
