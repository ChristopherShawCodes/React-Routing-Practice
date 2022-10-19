import React from 'react'
import {NavLink} from 'react-router-dom'
import {useParams} from 'react-router'


const Custom = (props) => {
    const {message, textColor, divColor} = useParams()
  return (
    <div style={{backgroundColor:(divColor),
                    width: '700px', 
                    margin: '0 auto',
                    borderRadius: '10px',
                    padding: '10px'}}>
    <h1 style={{color: (textColor)}}>{message}</h1>
    <p> Text Color: {textColor}</p>
    <p> Div Color: {divColor}</p>
    <p>Example: localhost:3000/home/YOUR MESSAGE HERE/ TEXT COLOR / DIV COLOR</p>
    <NavLink to='/'><button className='btn btn-danger' >Close This Element</button></NavLink>
    </div>
  )
}

export default Custom
