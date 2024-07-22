import { useState } from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
