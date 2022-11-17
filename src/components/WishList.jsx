import { Box, Chip, Stack } from '@mui/material';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {  useWishlist } from "react-use-wishlist";
import WishListCard from './WishListCard';

const WishList = () => {
  const {
    isWishlistEmpty,
    totalWishlistItems,
    items,
    removeWishlistItem,
  } = useWishlist();


  return (
    <Box  sx={{display:"flex",width:"100%",margin:"0 auto",  flexWrap:"wrap", alignItems:"center", justifyContent:"center",
    gap:"20px", padding:"15px"}}>
       <Stack sx={{width:"100%", paddingTop:"10px" }} >
     <Chip label={`Home > Your WishList`} sx={{width:"98%", display:"flex", alignItems:"center", justifyContent:"flex-start" ,
    fontSize:"18px", fontWeight:"500", height:"30px", borderRadius:"4px",margin:"0 auto", border:"1px solid gray" }}  />
       </Stack>
        {isWishlistEmpty ? 
        <div style={{textAlign:"center"}}>
        <h1>Wishlist Empty</h1>
        <Link to="/" style={{fontSize:"20px" , color:"#d01418"}} >Continue Shopping</Link>
        </div>
         : items.map((item, i)=>(
            <WishListCard data={item} key={i} />
        ))}
        </Box>
  )
}

export default WishList