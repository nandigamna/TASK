import './App.css';

import Home1 from './Home';
import About1 from './About';
import Feature1 from './Feature';
import Contact1 from './Contact';
import Login1 from './Login';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';   




function Header()
{
  return(
    
    <ul id='unorderlist'>
      <li><Link to="/home" id='LI-tag'>ABOUT</Link></li>
      <li><Link to="/about" id='LI-tag'>CAREER</Link></li>
      <li><Link to="/feature" id='LI-tag'>IMGES</Link></li>
      <li><Link to="/contact" id='LI-tag'>SOCIAL</Link></li>
      <li><Link to="/login" id='LI-tag'>LOGIN</Link></li>
    </ul>
  )
}




function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>   
      

      <Route path='/home' element={<Home1/>}></Route>
      <Route path='/about' element={<About1/>}></Route>
      <Route path='/feature' element={<Feature1/>}></Route>
      <Route path='/contact' element={<Contact1/>}></Route>
      <Route path='/login' element={<Login1/>}></Route>

    </Routes>
    </BrowserRouter>
    
    


    </>
  );
}

export default App;
