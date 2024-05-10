import React from 'react'
import { useNavigate } from 'react-router-dom'

function About () {
    const navigate = useNavigate();
    const clicked = () => { 
        navigate('/')
    }
  return (
    <div>
        <h1>
            Hello
        </h1>
        <button onClick={clicked}>Home</button>
    </div>
  )
}

export default About