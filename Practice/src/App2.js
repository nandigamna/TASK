// import './App2.css'
// import React, { useEffect, useState } from 'react'
// import Chinna from 'axios'

// function App2() {
//   let [a, b] = useState([])
//   useEffect(() => {
//     Chinna.get("Naresh.json").then(data2 => { b(data2.data) })

//   }, [])

//   function rad() {
//     var radioButtons = document.getElementsByTagName("input");
//     var checkradio = false;
//     if (!checkradio) {
//       alert("PLEASE SELECT OPTIONS")
//     }
//   }



//   function sub(a) {
//     let count = 0;
//     console.log(a)




//   }
//   sub()




//   return (
//     <>
//       <div>
//         {
//           a.map(data =>
//             <ul>
//               <h3>{data.id}.{data.question}</h3>

//               <li>
//                 <input type='radio' id='a' />
//                 <label for="a" >{data.options[0]}</label>
//               </li>

//               <li>
//                 <input type='radio' id='b' />
//                 <label for="b">{data.options[1]}</label>
//               </li>

//               <li>
//                 <input type='radio' id='c' />
//                 <label for="c">{data.options[2]}</label>
//               </li>

//               <li>
//                 <input type='radio' id='d' />
//                 <label for="d">{data.options[3]}</label>
//               </li>

//               <button >PREV</button>
//               <button onClick={rad}>NEXT</button>


//             </ul>

//           )

//         }
//       </div>
//       {
//         a.map(chinna =>

//           <button style={{ marginLeft: "50px" }} onClick={sub({chinna})}>SUBMIT{chinna.id}</button>

//         )

//       }

//     </>

//   )
// }

// export default App2













// import './App2.css'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function App2() {
//   const [questions, setQuestions] = useState([])
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
//   const [userResponses, setUserResponses] = useState({})
//   const [score, setScore] = useState("5")

//   useEffect(() => {
//     axios.get("Naresh.json")
//       .then(response => {
//         setQuestions(response.data)
//       })
//       .catch(error => {
//         console.error('Error fetching questions:', error)
//       })
//   }, [])

//   function handleOptionSelect(optionIndex) {
//     const questionId = questions[currentQuestionIndex].id
//     setUserResponses({
//       ...userResponses,
//       [questionId]: optionIndex
//     })
//   }

//   function handleNext() {
//     const nextQuestionIndex = currentQuestionIndex + 1
//     if (nextQuestionIndex < questions.length) {
//       setCurrentQuestionIndex(nextQuestionIndex)
//     }
//   }

//   function handlePrev() {
//     const prevQuestionIndex = currentQuestionIndex - 1
//     if (prevQuestionIndex >= 0) {
//       setCurrentQuestionIndex(prevQuestionIndex)
//     }
//   }

//   function submit() {
//     // Calculate the score based on user responses
//     let totalScore = 0
//     questions.forEach(question => {
//       const questionId = question.id
//       if (userResponses.hasOwnProperty(questionId)) {
//         const selectedOptionIndex = userResponses[questionId]
//         if (selectedOptionIndex === question.correctIndex) {
//           totalScore++
//         }
//       }
//     })
//     setScore(totalScore)
//   }

//   return (
//     <>
//       <div>
//         {questions.length > 0 && (
//           <ul key={questions[currentQuestionIndex].id}>
//             <h3>{questions[currentQuestionIndex].id}.{questions[currentQuestionIndex].question}</h3>
//             {questions[currentQuestionIndex].options.map((option, index) => (
//               <li key={index}>
//                 <input
//                   type='radio'
//                   id={`option${index}`}
//                   checked={userResponses[questions[currentQuestionIndex].id] === index}
//                   onChange={() => handleOptionSelect(index)}
//                 />
//                 <label htmlFor={`option${index}`}>{option}</label>
//               </li>
//             ))}
//             <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>PREV</button>
//             <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>NEXT</button>
//           </ul>
//         )}
//       </div>
//       {currentQuestionIndex === questions.length - 1 && (
//         <button style={{ marginLeft: "50px" }} onClick={submit}>SUBMIT</button>
//       )}
//       {score > 0 && (
//         <div>
//           <h3 style={{color:"red"}}>Your Score: {score}</h3>
//         </div>
//       )}
//     </>
//   )
// }

// export default App2













import './App2.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App2() {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userResponses, setUserResponses]= useState({})
  const [score, setScore] = useState(null)
  const [showScore, setShowScore] = useState(false)

  useEffect(() => {
    axios.get("Naresh.json")
      .then(response => {
        setQuestions(response.data)
      })
      .catch(error => {
        console.error('Error fetching questions:', error)
      })
  }, [])



  function handleOptionSelect(optionIndex) {
    const questionId = questions[currentQuestionIndex].id
    console.log(questions[currentQuestionIndex].id)
    setUserResponses({
      ...userResponses,
      [questionId]: optionIndex
    })
  }

  function handleNext() {
    const nextQuestionIndex = currentQuestionIndex + 1
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex)
    }
  }



  function handlePrev() {
    const prevQuestionIndex = currentQuestionIndex - 1
    if (prevQuestionIndex >= 0) {
      setCurrentQuestionIndex(prevQuestionIndex)
    }
  }

  
  function submit() {
    // Calculate the score based on user responses
    let totalScore = 0
    questions.forEach(question => {
      const questionId = question.id
      if (userResponses.hasOwnProperty(questionId)) {
        const selectedOptionIndex = userResponses[questionId]
        if (selectedOptionIndex + 1 === question.answer) {
          totalScore++
        }
      }
    })
    setScore(totalScore)
    setShowScore(true)
  }

  return (
    <>
      <div>
        {
          questions.length > 0 && !showScore && (
            <ul key={questions[currentQuestionIndex].id} /*no use */>
              <h3>{questions[currentQuestionIndex].id}.{questions[currentQuestionIndex].question} </h3>


              {questions[currentQuestionIndex].options.map((option, index) => (
                <li key={index}>
                  <input
                    type='radio'
                    // id={`option${index}`}  //no use
                    checked={userResponses[questions[currentQuestionIndex].id] === index}  //no use one option select
                    onChange={() => handleOptionSelect(index)}                            //no use last output
                  />
                  <label htmlFor={`select${index}`}>{option}</label>
                </li>
              ))}
              <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>PREV</button>
              <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>NEXT</button>
            </ul>

          )}
      </div>
      {currentQuestionIndex === questions.length - 1 && !showScore && (
        <button style={{ marginLeft: "50px" }} onClick={submit}>SUBMIT</button>
      )}
      {
        showScore && (
          <div>
            <h3 >Your Score: {score}/{questions.length}</h3>
            <h3>WRONG SCORE:{score - questions.length}</h3>
          </div>

        )}
    </>
  )
}

export default App2


