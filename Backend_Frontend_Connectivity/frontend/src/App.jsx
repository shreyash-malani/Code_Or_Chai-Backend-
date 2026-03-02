import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>(setJokes(response.data)))
    .catch((error)=>{
      console.error("There was an error fetching the jokes!", error)
    })
  },[]) // empty array it will re render only once  

  return (
    <>
      <h1>Chai and Full Stack</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>
            {joke.title}
          </h3>
        </div> 
      ))}

    </>
  )
}

export default App
