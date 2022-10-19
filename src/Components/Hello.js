import React from 'react'
import {NavLink} from 'react-router-dom'
import {useParams} from 'react-router'


const Hello = (props) => {
    const {hello} = useParams()
  return (
    <div>
    <h1>Your Message: {hello}</h1>
    <p>Example: localhost:3000/home/message/ PUT YOUR MESSAGE HERE</p>
    <NavLink to='/'><button className='btn btn-danger' >Close This Element</button></NavLink>
    </div>
  )
}

export default Hello
