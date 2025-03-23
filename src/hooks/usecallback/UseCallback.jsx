
//usecallback hook return new function refferrence : if the dependencies change ,react create new function instance otherwise it keep
//the same function reffrence on every re-renders .
//without usecallback : a new function is created on every re-renders
//with usecallback [] : it remain the function reffrence same on the every render 
//with callback[dependencies] : a new function reffrence is created only the depencies has changed 

import React,{useState,useCallback} from 'react'
import Parent from './Parent.jsx'
const UseCallback = () => {
const [searchTerm,setSearchTerm] = useState("")
    const [count,setCount] = useState(0)
console.log(searchTerm,'searchTerm in callback')
  const handleChange = useCallback((e)=>{
    setSearchTerm(e.target.value)
   
  },[searchTerm])

  return (
    <div>
      usecallback
<Parent  searchTerm={searchTerm}  handleChange={handleChange}/>
 <button onClick={()=>setCount(count+1)}>Count :{count}</button>

    </div>
  )
}

export default UseCallback


