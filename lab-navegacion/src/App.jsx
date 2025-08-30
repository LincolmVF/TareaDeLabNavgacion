import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import { useCounter} from "./context/CunterContext"

function Home() {

  const {count, inc} = useCounter();
  return (
    <>
    
    <h2>Bienvenido a Home </h2>
    <p>Contador Global : {count}</p>
    <button onClick={inc}>Incrementar 1</button>
    </>
    
  );
}

function About() {
  const {count} = useCounter();
  return (
<>
  <h2>Sección About </h2>
  <p>El contador aqui tambien vale: {count}</p>
  </>
    
  )
}

function Profile() {
  const {count,reset}= useCounter();
  return(
    <>
  <h2>Perfil </h2>
  <p>El contador actual: {count}</p>
  <button onClick={reset}>Reset</button>
  </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

<h1>TEMA DE REPASO : REACT ROUTER + CONTEXT API</h1>

      <nav>
       
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link> 
        <Link to="/profile">Profile</Link>
      </nav>

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
