import React from 'react'
import "../components/CSS/Spinner.css"

const Spinner = () => {
  return (
    <div>
    <div className='spinner flex flex-col items-center space-y-2'></div>
    <p>Loading.....</p>
    </div>
  )
}

export default Spinner;
