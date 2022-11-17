import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useCart } from 'react-use-cart';
import {  useWishlist } from "react-use-wishlist";
import {Link} from 'react-router-dom'
import { Button, Card, CardActions, CardContent, CardMedia, ImageList, ImageListItem, Rating, Stack, Typography } from '@mui/material'



const CategoryData = (props) => {
    let {id, title,description,image,price,rating:{rate}} = props.data
    console.log(props.data)

    const { addItem } = useCart();
    const addToCart = () =>{
      addItem(props.data);
  }


  let [mouseOver, setMouseOver] = useState("none")

  const { addWishlistItem } = useWishlist();


    let handleClick=(e)=>
    {
           addWishlistItem(props.data)
    }

  return (
    <Card  onMouseOver={()=>setMouseOver("block")}
     onMouseOut={()=>setMouseOver("none")}
     sx={{ width: 300, height: 320, backgroundColor:"##efefef",
     position:"relative", boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px",
     '&::before':{
      backgroundColor: "black",
      opacity:"0.5",
      content:`""`,
      inset: 0,
      position: "absolute",
      bottom:"120px",
      transform: "scaleY(0)",
      transformOrigin: "bottom",
      transition: "transform 0.4s ease-in-out",
      zIndex: 1
     
    }
    ,
    '&:hover::before':{
      transform: 'scaleY(1)',
      transformOrigin: "bottom",
    }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{objectFit:"contain"}}
      />
      <CardContent sx={{backgroundColor:"#d1cccc", height:"200px", zIndex:3, position:"relative"}}>
        <Typography variant="p" sx={{fontSize:"14px", fontWeight:"bold"}} component="div">
          {title}
        </Typography>
        <Stack  sx={{position:"absolute", top:"69px"}}  >
        <Rating name="read-only" value={rate} readOnly />
        <Typography variant="p" sx={{fontSize:"19px", fontWeight:"bold"}} component="div">
        ₹ {price}
        </Typography>
    </Stack>
      </CardContent>
      <CardActions sx={{ position:"absolute", top:"70px" ,left:"30px" ,width:"100%",zIndex:3,display:`${mouseOver}`}}>
        <Button id={id} onClick={handleClick} sx={{  width:"50px", height:'60px', borderRadius:"50%",
      cursor:"pointer", '&:hover':{backgroundColor:"#d01418"}  }} ><FavoriteBorderIcon id={id} sx={{fontSize:"30px", color:"#fff", fontWeight:"100"}}  /> </Button>
        <Button  onClick={()=> addToCart()} sx={{  width:"50px", height:'60px', borderRadius:"50%",
      cursor:"pointer", '&:hover':{backgroundColor:"#133fef"}  }} ><ShoppingCartOutlinedIcon sx={{fontSize:"30px", color:"#fff", fontWeight:"100"}}  /></Button>
      <Link  to={`/singleProduct/${id}`}>
       <Button sx={{  width:"50px", height:'60px', borderRadius:"50%",
      cursor:"pointer", '&:hover':{backgroundColor:"green"}  }} ><RemoveRedEyeOutlinedIcon sx={{fontSize:"30px", color:"#fff", fontWeight:"100"}}  /></Button>
     </Link>
      </CardActions>
     
    </Card>
  )
}

export default CategoryData