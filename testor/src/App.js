import React, { createContext, useState } from 'react'
import Quize from './Quize'
import Main from './Main'
import Extras from './Extras'
import './App.css'

const magic=createContext()
function App() {
  const[data,setdata]=useState('Quize')
  const[score,setscore]=useState(0)
  return (
    <>
    
     

   <magic.Provider value={{data,setdata,score,setscore}}>
   {data==='Quize' && <Quize />}
   {data==='abhi' && <Main />}
   {data=='Extras' && <Extras />}
   </magic.Provider>


    
    
    
    </>
  )
}
export {magic}
export default App
