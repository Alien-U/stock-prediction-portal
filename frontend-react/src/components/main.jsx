import React from 'react'
import Button from './button.jsx'
const main = () => {
  return (
   <>
   <div className='container'>
        <div className="p-5 text-center bg-light-dark rounded">
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className="text-light lead">AI-powered stock research. Get insights in minutes. Invest smarter. Get real-time stock alerts and insights with our AI-powered stock research tool.Comprehensive insights, real-time analysis, and detailed stock research — all generated in under 2 minutes.</p>
            <Button text='Explore Now' class='btn-outline-info'/>
        </div>
    </div>
   </>
  )
}

export default main