import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Form1 from './Form';
import Todo1 from  './Todo';


import Homeg from './Home';
import Aboutg from './About';
import Remindersg from './Reminders';
import Contactg from './Contact';





function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          
          <Route path='/' element={<Form1/>}/>


          <Route path='/Todo' element={<Todo1/>}/>

          <Route path='/home' element={<Homeg />}></Route>
          <Route path='/about' element={<Aboutg />}></Route>
          <Route path='/reminders' element={<Remindersg/>}></Route>
          <Route path='/contact' element={<Contactg />}></Route>


        </Routes>
      </Router>
      
    
    </div>
  );
}

export default App;