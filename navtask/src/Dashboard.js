import React from 'react';
import './Dashboard.css'

function Dashboard() {
  return (
    <div>
      <div className='container-fluid pt-3'>

        <div className='row'>
          <div className='col-lg-9'>
            <div className='row'>
              <h3>Friendchised Dashboard Admin</h3>
            </div><hr></hr>

            <div className='row'><h4>Dashboard</h4></div>
            <div className='row'><p>Dashboard -Performance -<span style={{ fontWeight: "600" }}>Summery</span></p></div>

            <div className='row'>

              <div className='col-lg-2 ms-2 pt-1 ps-4 ' id='dash-box' >
                <h6 className='text-warning' id='navtask-box'>Need Review</h6>
                <h5>1081</h5>
              </div>

              <div className='col-lg-3 ms-4 pt-3 ps-5' id='dash-box' >
                <h6>Waiting List</h6>
                <h5>2809</h5>
              </div>

              <div className='col-lg-3 ms-4 pt-3 ps-5' id='dash-box'>
                <h6 id='dash-box3'>Listed Merchant</h6>
                <h5>323</h5>
              </div>

              <div className='col-lg-3 ms-3 pt-3 ps-4' id='dash-box'>
                <h6 id='dash-box4'>Suspended Merchant</h6>
                <h5>311</h5>
              </div>

            </div><hr></hr>


            <div className='row mt-3'>
              <div className='col-lg-5'>
                <img src='https://www.shutterstock.com/shutterstock/photos/1422790850/display_1500/stock-vector-stacked-bar-chart-vector-business-and-statistic-diagram-image-in-a-flat-style-1422790850.jpg' id='dash-img' />
              </div>
              <div className='col-lg-7'>
                <img src='https://cdn.dribbble.com/users/4885676/screenshots/16457250/media/f388a0b14b004585e0ee64252251f568.png?resize=400x300&vertical=center' id='dash-img' />
              </div>
            </div>



            <div className='row mt-4' id='confuse'>
              <div className='col-lg-1'>All</div>
              <div className='col-lg-2'><h6>Need Review</h6></div>
              <div className='col-lg-2'>Waiting List</div>
              <div className='col-lg-2'>Listed Merchant</div>
              <div className='col-lg-2'>Rej Merchant</div>
              <div className='col-lg-2'>Sus Merchant</div>
              <div className='col-lg-1'>Draft</div>
            </div>


            <div className='row mt-3'>
              <div className='col-lg-9'><h5>List Merchant</h5></div>
              <div className='col-lg-1'><input type='button' value="#Filter" className='pt-1 ps-2 pe-2 pb-1' id='navtask-but2'/></div>
              <div className='col-lg-2'><input type='button' value="Add merchant" className='pt-1 ps-2 pe-2 pb-1' id='navtask-but2' /></div>
            </div>


            <div className='row mt-4'>
              <div className='col-lg-3 ps-3'><h6>Business Name</h6></div>
              <div className='col-lg-3 ps-4'><h6>Category</h6></div>
              <div className='col-lg-3 ps-4'><h6>Progress</h6></div>
              <div className='col-lg-3 ps-4'><h6>Rating</h6></div>
            </div>


            <div className='row mt-3'>
              <div className='col-lg-3'>Summer Mini Bars</div>
              <div className='col-lg-3'>Food & Beverage</div>
              <div className='col-lg-3' ><input type='range' /></div>
              <div className='col-lg-3 '>⭐⭐⭐⭐⭐</div>
            </div>

            <div className='row mt-4'>
              <div className='col-lg-3'>Angkringan MasAdit</div>
              <div className='col-lg-3'>Food & Beverage</div>
              <div className='col-lg-3'><input type='range' /></div>
              <div className='col-lg-3'>⭐⭐⭐⭐⭐</div>
            </div>

            <div className='row mt-4'>
              <div className='col-lg-3'>Warunq Mba Yanti</div>
              <div className='col-lg-3'>Food & Beverage</div>
              <div className='col-lg-3'><input type='range' /></div>
              <div className='col-lg-3'>⭐⭐⭐⭐⭐</div>
            </div>



          </div>



          <div className='col-lg-3'>



            <div className='row' style={{marginTop:"-27px"}}>
              <div className='col-lg-4'>
              <img src='https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2022/10/27/thalapathy-vijay-s-vaarasudu-aka-varisu-movie-working-HD-stills-.jpg?fit=2560%2C1707&quality=80&zoom=1&ssl=1?v=1666870470' id='pic' width="100%"/>
              </div>
              <div className='col-lg-6'>
                <h6>VIJAY</h6>
                <p>INDIA ACTOR</p>
              </div>

            </div>
            <hr></hr>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard