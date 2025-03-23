import React,{useState,useMemo,useEffect} from 'react'

const UseMemo = () => {
    const [count,setCount] = useState(0)
    const [targetValue,setTargetValue] = useState("")
    console.log(targetValue,'targetValue ')
// with useeffect
// const getEvenNumber  = useEffect(()=>{
//     console.log(count,'count')
//     console.log('this function will call when other state will update ')
//     count%2===0 

//     // useeffect must not return anything beside function ,which is used for cleanup ,destroy is not function
//             // return count%2===0 
         
// },[count])



    //with usememo hook :Prevents Unnecessary Computation ,stop unwanted fun call , memorized value and avoid recalculation and optimize performance of website 
    // usememo skips unnecessary calculation when unrelated state change 
        // useMemo in React is useful for optimizing performance by memoizing values that are expensive to compute. 
//  use case 
// 1 filtering large data sets 2 expensive calculation 3 preventing un-necessary re-renders 4 performance optimizing 
    const getEvenNumber  = useMemo(()=>{
        console.log("Recalculating getEvenNumber...",count);
                return count%2===0 
    },[count])

    // without use memo hook 
    // normal function recalculate /recomputed on every render even count has not change even call this function 
    // on every render meany any state update this function recalculate this result again whethere state is unrelated to this function 
    //while normal function recomputes on every render, even when count hasn't changed
    function withoutUseMemoGetEvenNumber(){
        console.log("Recalculating  without memo...",count);
                return count%2===0 
    }
  return (
    <div>setTargetValue
 <button onClick={()=>setCount(count+1)}>Count :{count}</button>
<h1>{withoutUseMemoGetEvenNumber()?'without usememo even':'without usememo odd'}</h1>
<h4>{getEvenNumber?'even':'odd'}</h4>
<input value={targetValue} placeholder="type here anything" type="text" onChange={(e)=>setTargetValue(e.target.value)}/>

    </div>
  )
}

export default UseMemo
