import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box } from '@mui/material'
import NavBar from './components/NavBar'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { Router, Link } from "@reach/router";

import './App.css'
import Home from './components/Home'
import SearchProvider from './context/SearchContext'
import ProductCard from './components/ProductCard'
import InputResetProvider from './context/InputReset'
import Categories from './components/Categories'
import WishList from './components/WishList'
import Cart from './components/Cart'

const App = () => {

  return (
    <Box>
      <SearchProvider>
      <InputResetProvider>
      
     <BrowserRouter>
     <NavBar/>
      <Routes>
          <Route  path='/' element={<Home/>} />
          <Route path='/singleProduct/:id' element={<ProductCard/>} />
          <Route path='/categories/:category'  element={<Categories/>} />
          <Route  path='/wishlist' element={<WishList/>}  />
          <Route  path='/cart' element={<Cart/>}  />

      </Routes>

     </BrowserRouter>
     
     </InputResetProvider>
     </SearchProvider>
    </Box>
  )
}

export default App