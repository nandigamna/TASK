import React from 'react';
import './App2.css';

import Nav from './Navbar';
import Dash from './Dashboard';
import Cust from './Customere';
import Activi from './Activity';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




import { FaCircle } from "react-icons/fa";
import { VscLayoutSidebarLeftOff } from "react-icons/vsc";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { BsPentagonHalf } from "react-icons/bs";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { BsBoxArrowUp } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { BsFiles } from "react-icons/bs";





function App2() {
    return (
        <>

<div className='container-fluid pt-2 pb-4'>
        <div className='row'>
          <div className='col-lg-3'>
            <FaCircle className='ms-2 text-danger' />
            <FaCircle className='ms-2 text-warning' />
            <FaCircle className='ms-2 text-sucess ' />
            <VscLayoutSidebarLeftOff className='ms-5' />
            <FaChevronLeft className='ms-3' />
            <FaChevronRight className='ms-2' />
          </div>

          <div className='col-lg-6'>
            <div className='row'>
              <div className='col-lg-1'><BsPentagonHalf /></div>
              <div className='col-lg-10 text-center'>
                <input type='text' placeholder='🔒Kashku.Com' id='up-inp' />
              </div>
            </div>
          </div>


          <div className='col-lg-1'></div>
          <div className='col-lg-2 ps-4'>
            <FaRegArrowAltCircleDown className='ms-5' />
            <BsBoxArrowUp className='ms-3' />
            <FaPlus className='ms-3' />
            <BsFiles className='ms-3' />
          </div> 



        </div>
      </div>

        





        <div>
            <BrowserRouter>
                <div className='container-flui'>
                    <div className='row'>
                        <div className='col-lg-2'><Nav /></div>
                        <div className='col-lg-10'>
                            <Routes>

                                <Route path='/' element={<Dash />}></Route>
                                <Route path='/customer' element={<Cust/>}></Route>
                                <Route path='/activity' element={<Activi/>}></Route>
                                
                            </Routes>
                        </div>
            
                    </div>

                </div>
            </BrowserRouter>


        </div>
        </>
    )
}

export default App2