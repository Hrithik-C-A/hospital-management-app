import React, { useState } from 'react'
import axios from 'axios'

const Search = ({searchLink}) => {
    const [searchText,setSearchText] = useState('')

    const handleSearch = (e)=>{
        e.preventDefault()

     const configuration = {
        method: 'post',
        url: `${searchLink}`,
        data :{
            name: searchText
        }
     }

    }
  return (
    <form onSubmit={handleSearch}>
        <input type="text" className='rounded' placeholder='Search Here' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        <button className='px-2 py-1 bg-blue-400 hover:bg-blue-600 rounded font-semibold text-white ' type='submit'>Search</button>
    </form>
  )
}

export default Search