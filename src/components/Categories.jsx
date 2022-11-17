import { Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { useWishlist } from 'react-use-wishlist'
import CategoryData from './CategoryData'



const Categories = () => {

    let {category} = useParams()

    let [categoryData, setCategoryData] = useState([])


    useEffect(()=>
    {
       axios.get(`https://fakestoreapi.com/products/category/${category}`).then(({data})=>
       {
        setCategoryData(data)
       })
    },[category])


  return (
       
              <Box  sx={{display:"flex",width:"100%",margin:"0 auto",  flexWrap:"wrap", alignItems:"center", justifyContent:"center",
              gap:"20px", padding:"15px"}}>
                 {categoryData.map((item, i)=>(
                                <CategoryData data={item} key={i} />
                            ))}
                  
                  </Box>
            )

  
}

export default Categories