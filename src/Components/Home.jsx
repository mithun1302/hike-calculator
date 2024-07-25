import React from 'react'
import '../Css/Home.css'
const Home = () => {
  return (
    <div>
        <div className='input-box'>
        <input type='number' placeholder='Enter Salary'/>
        <input type='number' placeholder='Enter Percentage'/>
        <button onSubmit={alert('Button Clicked!!!')}>Calculate</button>
        </div>
    </div>
  )
}

export default Home