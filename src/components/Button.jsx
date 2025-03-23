import {useSelector,useDispatch}  from 'react-redux'
import { incriment ,decriment,reset} from '../features/counterSlice'

const Button = ()=>{
 const counter = useSelector((state)=>state.counter)   
const dispatch = useDispatch()
    return (
        <>
   <button onClick={()=>dispatch(incriment())}>Incriment :{counter.inc} </button>     
   <button onClick={()=>dispatch(decriment())}>Decriment :{counter.dec} </button>    
   <button onClick={()=>dispatch(reset())}>Reset {counter.reset} </button>    

        </>
    )
}

export default Button
