import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const handleClick=()=>{
    setCount(count+1)
  }

  useEffect(()=>{
    document.title = `Clicked ${count} times`;  
  }, [count])

  return (
    <>
      <h1>Clicked {count} times</h1>
      <button onClick={handleClick}>Click me!</button>
    </>
  )
}

export default App
