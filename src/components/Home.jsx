import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext'
import SearchFilter from 'react-filter-search'
import axios from 'axios';
import Products from './Products';
import NoDataFound from './NoDataFound';
import { Box } from '@mui/material';


const Home = () => {

    let {searchInput,setSearchInput} = useContext(SearchContext)

    const [productData, setProductData] = useState([]);

    useEffect(()=>
    {
       axios.get('https://fakestoreapi.com/products').then(({data})=>
       {
        setProductData(data)
       })
    },[])
    // console.log(productData)
 
  return (
    <div>
{<SearchFilter 
                    value={searchInput}
                    data={productData}
                    renderResults={results =>(
                      
                        <Box  sx={{display:"flex",width:"100%",margin:"0 auto",  flexWrap:"wrap", alignItems:"center", justifyContent:"center",
                        gap:"20px", padding:"15px"}}>
                            {results.map((item, i)=>(
                                <Products data={item} key={i} />
                            ))}
                            </Box>
                            
   ) }
                />}
    </div>
  )
}

export default Home