import React,{useState,useMemo,useEffect} from 'react'
import axios from 'axios'

const UseMemo1 = () => {
    const [searchTerm,setSearchTerm] = useState("")
    const [data,setData] = useState([])
    const [debouncedSearch, setDebouncedSearch] = useState("");
        const [count,setCount] = useState(0)
useEffect(()=>{
  async  function fetchTodo (){
    const result = await axios.get("https://jsonplaceholder.typicode.com/todos")
    setData(result.data.slice(0,20))
    }
    fetchTodo()
},[])
const handleChange = (searchValue)=>{
  setSearchTerm(searchValue)
}
useEffect(()=>{
  let timer ;
  timer = setTimeout(()=>{
    if(searchTerm.length>0){
    setDebouncedSearch(searchTerm)
    }

  },1000)
  return ()=>clearTimeout(timer)
},[searchTerm])
const filteredData = useMemo(()=>{
    if(!debouncedSearch)return data
    const id = Number(debouncedSearch)
const result =  data.filter((item)=>{
               if(searchTerm===""||item.id===id){
                return item
               }else{
                return item.title.toLowerCase().includes(debouncedSearch)
               }
            })
            return result
          },[debouncedSearch,data,searchTerm])
  return (
    <div style={{display:'flex',justifyContent:'center',margin:'50px',flexDirection:'column' ,width:'700px'}}>
      <input  placeholder="type here anything" type="text" value={searchTerm} onChange={(e)=>handleChange(e.target.value)}/>
      {filteredData.length>0&&filteredData?filteredData.map((item)=>(
        <h1 key={item.id}><span>{item.id}</span> {item.title}</h1>
     )):<h1>No Data Found</h1>
} 

<h3>features debouncing </h3>
 <button onClick={()=>setCount(count+1)}>Count :{count}</button>

    </div>
  )
}

export default UseMemo1
