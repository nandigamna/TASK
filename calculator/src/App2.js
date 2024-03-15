import React, {useState} from 'react';
import './App2.css'


function App2() {
    const [a,b] = useState('');
    const [c,d] = useState('');
    const [e,f] = useState('')


    const naresh=(e)=>{
        b(e.target.value)
    }
    const naresh1=(e)=>{
        d(e.target.value)
    }



    const add=()=>{
        
         f(Number(a)+Number(c))
        
    }
    const min=()=>{
        
         f(Number(a)-Number(c))
      
    }
    const mul=()=>{
        
         f(Number(a)*Number(c))
    
    }
    const div=()=>{
        
         f(Number(a)/Number(c))
    }
    const chinna=()=>{
        if(a=="" || c=="")
        {
            
            alert("PLEASE ENTER VALID NUMBER")
    
        }

        b('')
        d('')
        f('')
    }
    










  return (



    <div id='main'>
        <h1 id='name'>CALCULATOR</h1>

        <input   type='text'  value={a} onChange={naresh}   placeholder='😊 FIRST NUMBER'    id='inp'/>
        <input   type='text'  value={c} onChange={naresh1}  placeholder=' ❤️‍🔥SECOND NUMBER'   id='inp1'/><br/>
        

        <button  onClick={add}  id='but'> + </button>
        <button  onClick={min}  id='but'> - </button>
        <button  onClick={mul}  id='but'> * </button>
        <button  onClick={div}  id='but'> / </button><br/>

        <button onClick={chinna} id='reset'>RESET</button>




        <h1 id='total'>TOTAL=<span style={{color:"red"}}>{e}</span></h1>


    </div>



  )
}

export default App2