import React from 'react'
import Sidebar  from './Sidebar'
import "bootstrap/dist/css/bootstrap.min.css"
//import {Most} from "./Most"
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='container m-5'>
       <div className='row'>
        <div className='col-3'>
          <h1 className="text-center">DashBoard</h1>
          <Sidebar/>
        </div>

        <div className='col-9'>
          <Outlet/>
        </div>
       </div>
    </div>
  )
}
export default Dashboard;
