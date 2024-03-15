// import React, { useRef } from 'react'

// function Naresh() {
//     const a=useRef()
//     console.log(a.current)
//   return (
//     <div>
//         <h1 ref={a}>WELCOME TO REACT JS</h1>
//     </div>
//   )
// }

// export default Naresh








// import React, { useRef } from 'react'

// function Naresh() {
//     let ele=useRef()
//     const a=()=>{
//         console.log(ele)
//         console.log(ele.current)
//         console.dir(ele.current)
//         ele.current.innerHTML="OK CHANGED";
//     }
//   return (
//     <div>
//         <h1 ref={ele}>1.WELCOME NODE JS</h1>
//         <button onClick={a}>CLICK ME</button>

//     </div>
//   )
// }

// export default Naresh







import React, { useRef } from 'react';
import './Naresh.css'

function Naresh() {
    let ele = useRef()
    const a = () => 
    {
        console.log(ele)
        console.log(ele.current)
        console.dir(ele.current)
        ele.current.innerHTML = "OK CHANGED";
        ele.current.classList.toggle("one")
        ele.current.classList.toggle("sec")
    }

    return (
        <div>
            <h1 ref={ele} className='one'>1.WELCOME NODE JS</h1>
            <button onClick={a}>CLICK ME</button>

        </div>
    )
}

export default Naresh