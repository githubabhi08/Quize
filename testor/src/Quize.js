import React, { useContext } from 'react'
import { magic } from './App'
function Quize() {
  const {data,setdata}=useContext(magic)
  return (
    <>
    <div className='box'>
    <button id='start' onClick={()=>{setdata('abhi')}} className='btn btn-primary'>Start Quize</button>
    </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Quize