import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home.page'
import About from './components/About.page'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </ul>
    </div>
  )
}

export default App
