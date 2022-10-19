import './App.css';
import {BrowserRouter, Routes, Route,NavLink} from 'react-router-dom'
import Home from './Components/Home';
import Number from './Components/Number'
import Hello from './Components/Hello'
import Custom from './Components/Custom'


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <div className='selector'>
      <h1>Route Selector</h1>
      <hr style={{width: '300px'}}></hr>
      <div className='col-4' id="btnContainer">
        <NavLink to='/home'><button className='btn btn-primary' >Display Home</button></NavLink>
        <NavLink to='home/:number'><button className='btn btn-primary' >Display Number</button></NavLink>
        <NavLink to='home/message/:hello'><button className='btn btn-primary' >Hello Message</button></NavLink>
        <NavLink to='home/:message/:textColor/:divColor'><button className='btn btn-primary' >Color Selector</button></NavLink>
      </div>
    </div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='home/:number' element={<Number/>}/>
        <Route path='home/message/:hello' element={<Hello/>}/>
        <Route path='home/:message/:textColor/:divColor' element={<Custom/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
