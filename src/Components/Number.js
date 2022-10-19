import React from 'react'
import {NavLink} from 'react-router-dom'
import {useParams} from 'react-router'


const Number = (props) => {
    const {number} = useParams()
  return (
    <div>
    <h1>The number is: {number}</h1>
    <p>Example: localhost:3000/home/ PUT YOUR NUMBER HERE</p>
    <NavLink to='/'><button className='btn btn-danger' >Close This Element</button></NavLink>
    </div>
  )
}

export default Number
