import React, { useEffect, useState }  from "react";



function App() {
  const [a,b]=useState(0)
  const [c,d]=useState(0)


  useEffect(()=>{
    console.log("use Effect")
  },[a]);

  const naresh=()=>{
    b(a+1)
  }
  const naresh1=()=>{
    d(c+1)
  }




  return (
    <div>
      <h1>USING USEEFFECT</h1>
      <button onClick={naresh}>SUBMIT:{a}</button>
      <button onClick={naresh1}>LOGIN:{c}</button>
    </div>
  );
}

export default App;
