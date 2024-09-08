import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Project } from './components/Projects'

function App() {
  return (
    <div className="bg-customDark text-white min-h-screen">
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
