import { Box, IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Padding, Search}  from '@mui/icons-material'
const SearchBar = () => {
  const [searchTerm,setsearchTerm]=useState('');
  const naviagate=useNavigate();

const handleSubmit=(e)=>{
  e.preventDefault();
  if(searchTerm) {
    naviagate(`/search/${searchTerm}`)
    setsearchTerm('');

  }

}
  return (
  <Paper className='block' component={"form"}
  onSubmit={handleSubmit}
  sx={{
    borderRadius:20,
    border:'1px solid #e3e3e3',
    pl:2,
    boxShadow:'none',
    mr:{sm:5}
  }}>


<input className='search-bar ' 
    placeholder='Search here' 
    value={searchTerm}
    onChange={(e)=>setsearchTerm(e.target.value)}
/>


<IconButton>
    <Search/>
</IconButton>

  </Paper>
  )
}
export default SearchBar
