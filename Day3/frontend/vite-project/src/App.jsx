import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

// String jokes = ""; // value
// void setJokes(String newValue) {
//   jokes = newValue;
// }


function App() {
  const[jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      console.log(response.data)
      setJokes(response.data)
    })
    .catch((error) => 
      {
      console.error("There was an error fetching the jokes!", error);
    }) 
  },[]) // empty array it will re render only once  

  return (
    <>
      <h1>Chai and Full Stack </h1>
      <p>JOKES:{jokes.length}</p>

      {
        jokes.map((joke) => {
          return (
            <div key={joke.id}>
              <h3>
                {
                  joke.id
                }
                {joke.title}
              </h3>
            </div>
          )
        })
      }
    </>
  )
}

export default App

// for (String joke : jokes) {
//     System.out.println(joke);
// }

