import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

export default function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route paath="/" element={<Home/>} />
  <Route paath="/about" element={<About/>} />
  <Route paath="/sign-in" element={<SignIn/>} />
  <Route paath="/sign-up" element={<SignUp/>} />
  <Route paath="/dashboard" element={<Dashboard/>} />
  <Route paath="/projects" element={<Projects/>} />
 </Routes>
 </BrowserRouter>
  )
}
