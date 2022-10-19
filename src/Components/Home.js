import React from 'react'
import {NavLink} from 'react-router-dom'


const Home = () => {
  return (
    <div>
    <h1>Welcome</h1>
    <p>This is a home page.</p>
    <NavLink to='/'><button className='btn btn-danger' >Close This Element</button></NavLink>

    </div>
  )
}

export default Home