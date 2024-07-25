import React from 'react'
import '../Css/Home.css'
const Home = () => {
  return (
    <div>
        <div className='input-box'>
        <input type='number' placeholder='Enter Salary'/>
        <input type='number' placeholder='Enter Percentage'/>
        <button onSubmit={() =>console.log('Button1 Clicked!!!')}>Calculate</button>
        </div>

        <div className='input-box'>
        <input type='number' placeholder='Enter Previous Salary'/>
        <input type='number' placeholder='Enter Current Salary'/>
        <button onSubmit={() => console.log('Button2 Clicked!!!')}>Calculate</button>
        </div>
    </div>
  )
}

export default Home