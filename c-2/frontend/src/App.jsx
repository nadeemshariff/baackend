import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const [jokes, setJokes] = useState([])

  useEffect (() => {
    axios.get('/api/jokes') // replace with the actual API endpoint when deployed and the url is kept at config file by adding proxy
    // Get jokes from API
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },
  )




  return (
    <>
      <h1>Full stack || Done ||</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((jokes, index) => (
          <div key={jokes.id}>
            <h3>{jokes.title}</h3>
            <p>{jokes.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App;
