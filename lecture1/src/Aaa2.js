import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Nav from './Navbar'

// import Homeg from './Home';
// import Aboutg from './About';
// import Remindersg from './Reminders';
// import Contactg from './Contact'

// import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import './Todo.css'

function TodoList(){
  const Navigate = useNavigate();

  const [tasks, setTasks] = useState(["Gopikrishna"]);
  const [inputValue, setInputValue] = useState('');
  const [searchList, setSearchList] = useState('');

  function ele1(){
    Navigate("/")
  }
  

  const handleInputChange = (ele) => {
    setInputValue(ele.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchList(event.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
    if(inputValue === ''){
      alert('Write some task')
    }
  };

  const removeTask = (indexremove) => {
    setTasks(prevTasks => prevTasks.filter((task, index) => index !== indexremove));
  };

  const filteredTasks = tasks.filter(task =>
    task.toLowerCase().includes(searchList.toLowerCase())
  );


  return (
    <>
{/* <Router>

<Routes>

  <Route path='/home' element={<Homeg />}></Route>
  <Route path='/about' element={<Aboutg />}></Route>
  <Route path='/reminders' element={<Remindersg/>}></Route>
  <Route path='/contact' element={<Contactg />}></Route>


</Routes>
</Router> */}

<Nav/>

  


    <div className='main'>
      <h1 className='head'>To-Do List</h1>
      <input className='inp1' type="text" value={searchList} onChange={handleSearchChange} placeholder="Search tasks"/>

      <input className='inp' type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter a task"/>
      <button className='bttn' onClick={addTask}>Add Task</button>
      {/* <input className='inp1' type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search tasks"/> */}

     



      <ul className='rslt'>
        {filteredTasks.map((task, index) => (
          <li className='rslt1' key={index}> {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
        <button className='lbtn' onClick={ele1}>Logout</button>
      </ul>
    </div>
    </>
    
  );
}

export default TodoList;