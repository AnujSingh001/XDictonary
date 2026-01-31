import { useState } from 'react'
import Dictionary from './component/Dictonary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dictionary/>
    </>
  )
}

export default App
