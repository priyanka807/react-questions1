//useref : react hooks , create mutable variable which will not re-render , it is designed to take rffrence of particular element based on those
//  reffrrence we manipulate with dom by change style , adding chid elemnet and focusing etc 

// when do we want to use useref in real-world-scenerio 
//managing on focus input fields (Dom manipulation) and //use in signup/login form to imrove ux by focusing on first input fields automatically 


import React,{useRef,useState,useEffect} from 'react'


const UseRef = () => {
    const [count,setCount] = useState(0)
    console.log('component re-render  ')
    const refIncriment = useRef(0)
    const inputRef = useState(0)

     //react first render the component and initilize variable . that'why here we are getting error because we are trying tos ett property on null value
        // without using useffect it provide null value dom has not renderd yet so how can we accedd dom element that'why we have to use this inide any function or useeffect 
        // useeffect only render when component is mount it means component is ready to render on webpage and now variable can acces those elemnet reffrence 
       //useEffect(() => {...}, []) runs after the component mounts. when dom is ready to execute on webpage 
        
       // inputRef.current.value = "priyanka"
        // inputRef.current.style.background = "red"
        // inputRef.current.focus()
    
        useEffect(()=>{
          inputRef.current.value = "priyanka"
          inputRef.current.style.background = "red"
          inputRef.current.focus()
          console.log(inputRef,'inputRef')
        },[])
  return (
    <div>
<button onClick={()=>setCount(count+1)}>Count : {count}</button>
<button onClick={()=>{refIncriment.current+=1;console.log(refIncriment.current,'refIncriment.current')}}>RefIncriment : {refIncriment.current}</button>
   
   
  <input type="text"  placeholder="......write anything"  value=""  ref={inputRef} 
                   />  
    </div>
  )
}

export default UseRef;