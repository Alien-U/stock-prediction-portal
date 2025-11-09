import React from 'react'
import Button from './button.jsx'
const header = () => {
  return (
   <>
    <nav className='navbar container pt-3 pb-3 aligh-items-start'>
      <a href="" className='navbar-brand text-light'>Stock Prediction Portal</a>
      <div>
        <Button text='Login' class='btn-outline-info'/>
        &nbsp;
        <Button text='Register' class='btn-info'/>
      </div>
    </nav>
   </>
  )
}

export default header