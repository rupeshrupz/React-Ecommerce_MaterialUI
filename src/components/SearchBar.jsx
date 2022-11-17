import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { SearchContext } from '../context/SearchContext';
import { InputReset } from '../context/InputReset';
import { useNavigate } from 'react-router-dom';


const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: black;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-bottom: black;
    }
  }
`

const SearchBar = () => {

    let {searchInput,setSearchInput} = useContext(SearchContext)

    // let [buttonChange, setButtonChange]= useState()
    let {buttonChange, setButtonChange}  = useContext(InputReset)
    let navigate = useNavigate()

   function handleSubmit(e)
    {
        e.preventDefault()
    }

    function buttonSearch(e)
    {
        e.preventDefault()
        
        searchInput = buttonChange
        setSearchInput(searchInput)
        navigate('/')
    }

  return (
    <Box
    component="form"
    sx={{
   
      display:{md:"flex",lg:"flex",xl:"flex",xs:"none",sm:"none"},
      flexDirection:"row",
      alignItems:"center"
      
    }}
    onSubmit={handleSubmit}
   >
    <WhiteBorderTextField sx={{backgroundColor:"#fff",outline:"none", width:"370px",height:"50px",
   borderRadius:"4px 0px 0px 4px"}}  label="Search" variant="filled"
   value={buttonChange}
   onChange={(e)=>setButtonChange(e.target.value)}
   />
    <Button variant="contained" type="submit" onClick={buttonSearch} sx={{backgroundColor:"#d01418", height:"50px"}} ><SearchOutlinedIcon/></Button>
   </Box>
  )
}

export default SearchBar





