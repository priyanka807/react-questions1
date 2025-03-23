
import React,{memo,useState} from 'react'

const SearchInput = ({searchTerm,handleChange})=>{

  return (
    <div>
      <input type="text"  placeholder="search here anything "  value={searchTerm||""}  onChange={handleChange}/>
    </div>
  )
}

const Parent = ({searchTerm,handleChange}) => {
  return (
    <div>
     <SearchInput searchTerm={searchTerm} handleChange={handleChange}  />   
    </div>
  )
}

export default memo(Parent)