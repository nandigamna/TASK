import React, { useEffect, useState } from 'react';
import Naresh from "axios";
import './App4.css'


function App4() {
    const [a, b] = useState([])
    const [c, d] = useState(0)
    const [e, f] = useState({})
    const [g, h] =useState(0)
    const [i, j] =useState(false)
    const [k, l] =useState()
    const [m, n] =useState()
    useEffect(() => {
        Naresh.get("Naresh.json").then(res => { b(res.data) })
    }, [])



    const nex = () => {
        d(c + 1);
    }
    const pre = () => {
        d(c - 1);
    }
    const sub =()=>{
        let score=0;
        a.forEach(ques=>{
            const id=ques.id
            if(e.hasOwnProperty(id)){
                const ind=e[id]
                if(ind + 1 ===ques.answer)
                {
                    score++
                }
            }
        })
        h(score)
        j(true)
    }


    function select(two){
        const id=a[c].id
        f({
           ...e,[id]:two
        })
    }


    const fina =()=>{
        l(g)
    }

    const fina2=()=>{
        n(10-k)
    }


    return (
        <>
            <div>
                {
                    a.length > 0 && !i &&
                    (
                        <ul>
                            <h3>{a[c].id}.{a[c].question}</h3>
                            {
                                a[c].options.map((one, two) =>
                                    (<li>
                                        <input type='radio'  checked={e[a[c].id]===two} onChange={()=>select(two)}/>
                                        <label>{one}</label>
                                    </li>))
                            }
                            <button onClick={pre} disabled={c === 0}>PREV</button>
                            <button onClick={nex} disabled={c === a.length - 1}>NEXT</button>
                        </ul>
                    )
                }
            </div>
       
        {c===a.length-1 && !i &&( 
            <button onClick={sub}>SUBMIT</button>

        )}
        {
            i &&(
                <div>
                    <h3>YOUR SCORE ARE</h3>
                    <button onClick={fina}>CORRECT</button>
                    <button onClick={fina2}>WRONG</button>
                    <h1>CORRECT:{k}</h1>
                    <h1>WRONG:{m}</h1>
                </div>
                
            )
        }
     </>

    )
}


export default App4