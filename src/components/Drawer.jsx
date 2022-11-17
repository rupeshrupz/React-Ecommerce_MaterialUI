import { Drawer, Box, Typography, IconButton, List, ListItem, Divider, ListItemText, TextField, Button, ListItemButton, ListItemIcon, Collapse } from '@mui/material'
import MenuIcon from   "@mui/icons-material/Menu"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoveToInboxIcon  from '@mui/icons-material/MoveToInbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React, { useContext, useEffect } from 'react';
import { useState } from "react"
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import axios from 'axios';
import { SearchContext } from '../context/SearchContext';
import { InputReset } from '../context/InputReset';
import { useNavigate, Link } from 'react-router-dom';

export const MuiDrawer = ()=>
{
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
      setOpen(!open);
    };


    let [categories, setCategories] = useState([])

  useEffect(()=>
  {
    axios.get("https://fakestoreapi.com/products/categories").then(({data})=>
    {
      setCategories(data)
    })
  },[])

  let {searchInput,setSearchInput} = useContext(SearchContext)
  let {buttonChange, setButtonChange}  = useContext(InputReset)
  let navigate = useNavigate()


    // let [buttonChange, setButtonChange]= useState()

   function handleSubmit(e)
    {
        e.preventDefault()
    }

    function buttonSearch(e)
    {
        e.preventDefault()
        
        searchInput = buttonChange
        setSearchInput(searchInput)
        setIsDrawerOpen(false)
        navigate('/')
    }

    return (
        <>
        <IconButton size='large'
  edge='start'
  color='inherit'
  aria-label='logo'
  onClick={() => setIsDrawerOpen(true)}
  >
     <MenuIcon  sx={{display:{xl:"none",lg:"none",md:"none",sm:"block", xs:"block"}}} />
</IconButton>

     <Drawer
       anchor='left'
       open={isDrawerOpen}
       onClose={() => setIsDrawerOpen(false)}  
       
       >

        <Box p={2} sx={{backgroundColor:"#d8d3d3"}} height='100%' width= '280px' textAlign= 'start' role='presentation' >
    <Box 
    component="form"
    onSubmit={handleSubmit}
      sx={{display:"flex", flexDirection:"row"}}>

        <TextField
  label="Search.."
  variant="standard"
  color="error"
  focused
  value={buttonChange}
  onChange={(e)=>setButtonChange(e.target.value)}
/>
<Button variant="contained"
 type="submit"
 onClick={buttonSearch}
 sx={{backgroundColor:"#d01418", height:"44px", position:"relative",left:"10px"}} ><SearchOutlinedIcon/></Button>
</Box>
        <List sx={{width:"100%",maxWidth:"200px"}} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Top Product" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Blog" />
      </ListItem>
      <Divider  />
      <ListItem button>
        <ListItemText primary="About Us" />
      </ListItem>
      <Divider  />
      <ListItemButton onClick={handleClick}>
       
        <ListItemText primary="Categories" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" sx={{display:"flex",flexDirection:"column"}} disablePadding>
        
            {categories.map((ele,ind) =>
              {
                return  (
                  
                  <ListItemButton key={ind} sx={{ pl: 4,fontSize:"10px" }}>
                    <Link to={`/categories/${ele}`} style={{textDecoration:"none"}}  >
                    <Button onClick={()=>setIsDrawerOpen(false)} sx={{border:"1px solid red", width:"150px", color:"black",
                    fontWeight:"bold",
              "&:hover":{
                color:"#fff",
                backgroundColor:"#d01418"
              }  }}>
                 
                <ListItemText primary={ele} sx={{fontSize:"10px"}}  />
                
                </Button>
                </Link>
                </ListItemButton>
                
                )
              })}
         
        </List>
      </Collapse>
    </List>
       </Box>
     </Drawer>
     </>
    )
}
 



