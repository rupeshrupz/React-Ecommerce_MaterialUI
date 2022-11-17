import { AppBar, Badge, Button, IconButton, Menu, MenuItem, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
import { MuiDrawer } from './Drawer';
import SearchBar from './SearchBar';
import {Link,useNavigate} from 'react-router-dom'
import Home from './Home'
import { SearchContext } from '../context/SearchContext';
import { InputReset } from '../context/InputReset';
import { useCart } from "react-use-cart";
import {  useWishlist } from "react-use-wishlist";


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

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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

  function resetBtn()
  {
    console.log("reset clicked")
    navigate("/")
    setSearchInput(" ")
    setButtonChange(" ")
  }

  const {
    isEmpty,
    totalItems,
} = useCart();

const {
  isWishlistEmpty,
  totalWishlistItems,
  items,
  removeWishlistItem,
} = useWishlist();

 console.log(totalWishlistItems)

  return (
    <Box sx={{ width:"100%", height:{md:"138px",lg:"138px",xl:"138px",xs:"88px",sm:"88px"} ,backgroundColor:"#212522",color:"#fff" }}>
      <Stack sx={{display:"flex", flexDirection:"row", borderBottom:"1px solid #696767", height:"88px",
    alignItems:"center", justifyContent:"space-around"}}>
      <MuiDrawer  />
    <Button onClick={resetBtn}>
<h1  style={{color:"#fff"}}>STORE<span style={{color:"#d01418"}}>GO</span> </h1>
</Button> 
    <SearchBar/>
    <Stack >
    <Button variant="outlined" sx={{borderColor:"white", color:"white", border:{xs:"none",sm:"none",md:"1px solid #fff",lg:"1px solid #fff",xl:"1px solid #fff"}}}><Person2OutlinedIcon  /></Button>
    <Typography variant="p" sx={{display:{xs:"none",md:"block",lg:"block",xl:"block"}}}  component="p">
     My Account
</Typography>
    </Stack>

    <Stack>
    <Link to='/wishlist' style={{color:"#fff", textDecoration:"none"}}>
    <Button variant="outlined" sx={{borderColor:"white", color:"red",border:{xs:"none",sm:"none",md:"1px solid #fff",lg:"1px solid #fff",xl:"1px solid #fff"}}}>
    <Badge badgeContent={totalWishlistItems} color="primary">
      <FavoriteIcon  />
      </Badge>
      </Button>
    <Typography variant="p" sx={{display:{xs:"none",md:"block",lg:"block",xl:"block"}}} component="p">
   Wishlist
  </Typography>
  </Link> 
    </Stack>

    <Stack>
    <Link to='/cart'  style={{color:"#fff", textDecoration:"none"}}>
    <Button variant="outlined" sx={{borderColor:"white", color:"white",border:{xs:"none",sm:"none",md:"1px solid #fff",lg:"1px solid #fff",xl:"1px solid #fff"}}}>
    <Badge badgeContent={totalItems} color="primary">
      <ShoppingCartOutlinedIcon  />
      </Badge>
      </Button>
    <Typography variant="p"sx={{display:{xs:"none",md:"block",lg:"block",xl:"block"}}} component="p">
     My Cart
</Typography>
</Link> 
    </Stack>
</Stack>

<Stack  sx={{ height:"50px", display:{sm:"none",xs:"none",md:"flex",lg:"flex",xl:"flex"}, alignItems:"center"}}>
    <Box sx={{display:"flex", width:"70%", flexDirection:"row", height:"49px",
  gap:"30px", alignItems:"center", justifyContent:"center", textAlign:"center"}}>

<Stack >
<Button variant="outlined" sx={{width:"227px", backgroundColor:"#d01418", color:"#fff"}}
id="basic-button"
aria-controls={open ? 'basic-menu' : undefined}
aria-haspopup="true"
aria-expanded={open ? 'true' : undefined}
onClick={handleClick} >
 <MenuOutlinedIcon sx={{ display:{lg:"none",md:"none",sm:"none", xs:"block"} }}/> 
 All Categories
</Button>
<Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {categories.map((ele,ind)=>
        {
          return (

            <MenuItem onClick={handleClose}>
              
                
                <Link to={`/categories/${ele}`} style={{textDecoration:"none", color:"black"}}  >
                <Button sx={{border:"1px solid red", width:"194px", color:"black",
              "&:hover":{
                color:"#fff",
                backgroundColor:"#d01418"
              }  }}>
                  {ele}
                  </Button>
                  </Link>
                  
              
             
            </MenuItem>
          )
        })}
       
      </Menu>
</Stack>

<Stack sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",
alignItems:"center"}}>
  <h3>Home</h3>
  <h3>Top Product</h3>
  <h3>Special Product</h3>
  <h3>Special Product</h3>
  <h3>Blog</h3>
  <h3>About Us</h3>
</Stack>

    </Box>
</Stack>
  </Box>
 
  )
}

export default NavBar