import React from 'react';
import './Navbar.css'
import {Link } from 'react-router-dom';   

function Navbar() {

  return (
    <div>


      <div className='container-fluid p-1 '>
        <div className='row '>
          <div className='col-lg-12  pt-4 ps-5 pe-4' id='full-nav'>

            <h3 >Friendchised</h3>
            <div className='row mt-4'>
              <div className='col-lg-6 ' ><h6>Production</h6></div>
              <div className='col-lg-6'><h6>Sandbox</h6></div>
            </div>

            
            <h6 className='mt-5'  > Menu</h6>
            <h6 className='mt-4'  ><Link to="/" id='nav-1'>Dashboard</Link></h6>
            <h6 className='mt-3'  ><Link to="/customer" id='nav-1'>Customer</Link></h6>
            <h6 className='mt-3'  ><Link to="/activity" id='nav-1'>Activity</Link></h6>
            <h6 className='mt-3'  id='nav-0'>Merchant</h6>
            <h6 className='mt-3'  id='nav-0'>Transaction</h6>
            <h6 className='mt-3'  id='nav-0'>Long Activity</h6>
            <h6 className='mt-3'  id='nav-0'>Banner Promo</h6><hr className='mt-4'></hr>

            <h6 className='mt-3'  id='nav-1'>User Role Admine</h6>
            <h6 className='mt-3'  id='nav-1'>Setting</h6>


          </div>
  

        </div>
      </div>



    </div>
  )
}

export default Navbar