import { useState } from "react";
import './App.css'

function App() {

  const [a,b]= useState("")

  const [c,d]= useState("")
  const [e,f]=useState("")
  
  const[i,j]=useState("DARK")


  const chinna=(e)=>{
    b(e.target.value)
  }


  const lower=()=>{
   var data= a.toLowerCase()
   d(data)
   f("SUCCESSFULLY APPLY LOWERCASE")
   b(data)
  }


  const Upper=()=>{
    var data= a.toUpperCase()
    d(data)
    f("SUCCESSFULLY APPLY UPPERCASE")
    b(data)
   }
   

   const lengrh=()=>{
    var data= a.length
    d(data)
    b(data)
    f("SUCCESSFULLY APPLY LENGTH")
   }


   const rev=()=>{
    var data=(a.split("").reverse());
    d(data)
    b(data)
    f("SUCCESSFULLY APPLY REVERSED")
   }


   const clear=()=>{
    b("")
    d("CLEARED✌️")
    f("SUCCESSFULLY CLEARED")
   }



   const back=()=>{
    if("DARK"===i){
    document.querySelector(":root").style.backgroundColor="black"; 
    document.getElementById("main").style.backgroundColor="white"
    document.getElementById("chan").style.backgroundColor="white";
    j("WHITE")
    }
    else if("WHITE"===i){
      document.querySelector(":root").style.backgroundColor="white";
      document.getElementById("main").style.backgroundColor="blue";
      document.getElementById("chan").style.backgroundColor="blue";
      j("BLUE")
    }
    else {
      document.querySelector(":root").style.backgroundColor="purple";
      document.getElementById("main").style.backgroundColor="green";
      document.getElementById("chan").style.backgroundColor="green";
     
      j("DARK")

    }
   }






  return (
    <>


    <input type="button" value={i} onClick={back}  id="chan"/>



    <h3 style={{color:"green"}} id="sub">{e}</h3>

    <div id="main">


      <input    type='text' onChange={chinna}  value={a}  id="inp" /><br/>

      <button onClick={lower} id="but1">TOLOWERCASE()</button>
      <button onClick={Upper} id="but2" >ToUPPERCASE()</button><br/>
      <button onClick={lengrh}id="but3">LENGTH STRING</button>
      <button onClick={rev}   id="but4">REVERSE  NAME()</button><br/>
      <button onClick={clear} id="but5">CLEAR TEXTINP</button>
      

      <h1 style={{color:"white",marginTop:"20px",backgroundColor:"blue"}}>{c}</h1>
      
    </div>




    </>
  );
}

export default App;
