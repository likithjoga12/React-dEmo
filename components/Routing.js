import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Gallery } from './Gallery'
import { AboutUs } from './AboutUs'
import { Home } from './Home';
import Contact from './Contact';
import Edits2 from "./Edits2"

import Admit  from './Admit';
import  Dashboard  from './Dashboard';
//import Markdetect from './Markdetect';
//import { Home } from './Home';
import AddOffer from './AddOffer';
import { AddStudent } from './AddStudent';
import { SudentData } from './SudentData';
import {Nopage} from './Nopage'
import { DOffer } from './DOffer';
//import Ssrvice from './Ssrvice';
import { Fetcha } from './Fetcha';
import { Somn } from './Somn';

export const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Fetcha/>}/>
            <Route path="deleteservf/:id" element={<Somn/>}/>
            <Route  path="/gallery"element={<Gallery />} />
            <Route   path="/aboutus" element={<AboutUs />} />
            <Route    path="/contact"element={<Contact />} />
            <Route     path="/editData/:id"element={<Edits2 />} />
            <Route path="/admit"element={<Admit/>}/>
            <Route path='/dashboard'element={<Dashboard/>}>
              <Route path="" element= {<AddStudent/>}/>
              <Route path="Deletet" element= {<SudentData/>}/>
              <Route path="editstu" element= {<AddStudent/>}/>
              <Route path="offer" element= {<AddOffer/>}/>   
              <Route path="doffer" element ={<DOffer/>}/>         
            </Route>
           
            <Route path='*' element ={<Nopage/>}/>

          
           
        </Routes>
    </div>
  )
}
