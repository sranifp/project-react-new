import { useState } from 'react'
import Navbar from './components/organisms/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
			<h1 className="text-3xl font-normal text-center text-amber-800">
		    Hello world! Rani
		  </h1>
    </>
  )
}

export default App