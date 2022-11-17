import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Card, CardActions, CardContent, Chip, Paper, Rating, Stack, Typography } from '@mui/material';
import { useCart } from 'react-use-cart';


const ProductCard = () => {
 
    let {id} = useParams()
   let [productData, setProductData] = useState([])
    useEffect(()=>
    {
       axios.get(`https://fakestoreapi.com/products/${id}`).then(({data})=>
       {
        setProductData(data)
       })
    },[])

    const {
      isEmpty,
      items,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart,
      addItem
  } = useCart();

   let { title,description,image,price, rating} = productData

  return (
    <Box sx={{position:"relative"}}>

      <Stack sx={{width:"100%", paddingTop:"10px" }} >
     <Chip label={`Home >  ${title}`} sx={{width:"98%", display:"flex", alignItems:"center", justifyContent:"flex-start" ,
    fontSize:"18px", fontWeight:"500", height:"50px", borderRadius:"4px",margin:"0 auto", border:"1px solid gray" }}  />
       </Stack>

   <Box  sx={{width:"100%",height:{xl:"600px",lg:"600px",md:"100%",sm:"100%",xs:"100%"}, display:"flex", 
  alignItems:"center", justifyContent:"center"}}>
    <Stack  sx={{ display:"flex", flexDirection:{xl:"row",lg:"row",md:"row",sm:"column",xs:"column"}, alignItems:"center", 
  justifyContent:"space-between", width:{xl:"90%",lg:"90%",md:"90%",sm:'100%',xs:"100%"}, margin:"0 auto"}}>
   <Paper elevation={9}   sx={{width:{xl:"700px",lg:"500px",md:"100%",sm:"550px",xs:"100%"}, height:{xl:"600px",lg:"500px",md:"530px",sm:"450px",xs:"300px"}, display:"flex", alignItems:"center",
  justifyContent:"center", flexBasis:"30%"}} >
    {/* <img src={image} style={{width:{xl:"300px",lg:"300px",md:"300px",sm:"200px",xs:"200px"}, height:{xl:"200px",lg:"300px",md:"300px",sm:"100px",xs:"100px"}}}  alt="" /> */}
   <Box component="img" src={image} sx={{width:{xl:"300px",lg:"300px",md:"300px",sm:"100%",xs:"70%"}, height:{xl:"200px",lg:"300px",md:"300px",sm:"300px",xs:"280px"}} } ></Box>
    </Paper>

    <Paper  sx={{width:{xl:"100%",lg:"100%",md:"100%",sm:"100%",xs:"100%"}, height:{xl:"600px",lg:"500px",md:"530px",sm:"500px",xs:"500px"}, display:"flex", alignItems:"center",
  justifyContent:"center",flexBasis:"70%"}} >
    <Card sx={{ width: {xl:"100%",lg:"100%",md:"100%",sm:"100%",xs:"100%"}, height:"100%", position:"relative" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Demo
        </Typography>
        <Typography variant="h4" sx={{fontSize:{xl:"37px",lg:"37px",md:"30px",sm:"20px", xs:"20px"}}}  component="div">
          {title}
        </Typography>
        <Typography sx={{}} color="text.secondary">
        <Rating name="read-only" value={4} readOnly />
        </Typography>
        <Typography variant="h4" sx={{fontSize:{xl:"37px",lg:"37px",md:"30px",sm:"20px", xs:"20px"}}}  component="div">
        ₹ {price}
        </Typography>
        <Typography variant="body2" sx={{fontSize:{xl:"16px", lg:"16px", md:"15px",sm:"12px", xs:"12px"}}}  >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{height:{xl:"90px",lg:"80px",md:"70px"} ,  display:{xl:"flex",lg:"flex", md:"flex",sm:"flex", xs:"flex"},alignItems:"center", justifyContent:"center",  position:{xl:"absolute",lg:"absolute",md:"absolute"}, top:{xl:"500px", lg:"420px",md:"460px"}, width:"100%"}}>

      <Stack>
        <Button onClick={()=>addItem(productData)} sx={{ width:{xl:"270px", lg:"270px", md:"230px",sm:"200px", xs:"200px"}, height:{xl:"50px", lg:"50px", md:"35px",sm:"30px", xs:"30px"}, backgroundColor:"#d01418", '&:hover':{backgroundColor:"black"}}}>
           <Typography sx={{color:"#fff", fontSize:{xl:"25px", lg:"25px", md:"22px",sm:"19", xs:"19px"}, "&:hover":{color:"#fff"}}} >Add to Cart</Typography>  </Button>
      </Stack>

      </CardActions>
    </Card>
    </Paper>
    

    </Stack>
   </Box>
    </Box> 
  )
}

export default ProductCard