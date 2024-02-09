import { useState } from 'react'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainContent />
    </>
  )
}

export default App
