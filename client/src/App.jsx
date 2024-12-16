import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Author from './pages/Author'
const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/author/:name" element={<Author/>} />
      </Routes>
  )
}

export default App
