import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './header/header'
import Home from './home/home'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </Router>
  )
}

export default App
