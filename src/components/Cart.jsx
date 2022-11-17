import { Button, Chip, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
const Cart = () => {

  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
} = useCart();


  return (
    <div>

        <Stack sx={{width:"100%", paddingTop:"10px" }} >
     <Chip label={`Home > Your Shopping Cart`} sx={{width:"98%", display:"flex", alignItems:"center", justifyContent:"flex-start" ,
    fontSize:"18px", fontWeight:"500", height:"30px", borderRadius:"4px",margin:"0 auto", border:"1px solid gray" }}  />
       </Stack>
      { isEmpty ? 
      <div style={{textAlign:"center"}}>
      <h1>Cart is  Empty</h1>
      <Link to="/" style={{fontSize:"20px" , color:"#d01418"}} >Continue Shopping</Link>
      </div>
      :
   <Box sx={{paddingTop:"10px"}}>
    
       <Stack sx={{ display:"flex", flexDirection:"row", justifyContent:"space-between", width:"90%", margin:"0 auto"}}>
       <Typography variant="h4" component="h1">
          Your Cart
        </Typography>
        <Typography variant="h5" component="h1">
         <Link to="/"   style={{color:"#d01418"}}> Continue Shopping </Link>
        </Typography>
       </Stack>


      <Box  sx={{width:"90%", margin:"0 auto", paddingTop:"20px"}}>
      <TableContainer component={Paper}>
      <Table sx={{ width: {xl:"100%",lg:"100%", md:"100%", sm:"50%", xs:"30%"} }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Typography  sx={{fontSize:"25px"}}>
              Product
              </Typography>
              
              </TableCell>
            <TableCell align="left" sx={{display:{xl:"block",lg:"block",md:"block",sm:"block",xs:"none"}}}>
            <Typography  sx={{fontSize:"25px"}}>
              Quantity
              </Typography>
            </TableCell>
            <TableCell align="right">
            <Typography  sx={{fontSize:"25px"}}>
              Total
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  >
                <Box >
                  <Stack  sx={{display:"flex", flexDirection:"row", gap:"40px"}}>
                    <Box component="img" src={row.image} sx={{width:"100px", height:"100px"}} > 
                      </Box>
                     <Box>
                      <Typography  sx={{fontSize:"15px"}}>
                        {row.title}
                      </Typography>
                      <Typography  sx={{fontSize:"22px"}}>
                      ₹ {parseInt(row.price)}
                      </Typography>
                      <Stack   sx={{display:"flex", flexDirection:"row", gap:"12px"}}>
                      <Stack sx={{display:{xl:"none",lg:"none",md:"none",sm:"none",xs:"flex"}, flexDirection:"row", border:"1px solid gray",borderRadius:"5px", width:"150px", alignItems:"center", justifyContent:"space-between"}}>
        <Button sx={{}} onClick={()=> updateItemQuantity(row.id, row.quantity - 1)}  > <Typography sx={{fontSize:"11px", color:"black"}}>-</Typography> </Button>
        <Chip label={`${row.quantity}`} sx={{width:"55px", fontSize:"13px", border:"none", fontWeight:"bold"}}  variant="outlined" />
        <Button sx={{}} onClick={()=> updateItemQuantity(row.id, row.quantity + 1)} ><Typography sx={{fontSize:"13px", color:"black"}}>+</Typography></Button>
        </Stack> 
        <DeleteOutlinedIcon onClick={()=> removeItem(row.id)}   sx={{cursor:"pointer", display:{xl:"none",lg:"none",md:"none",sm:"none",xs:"flex"},fontSize:"28px", color:"#575656"}} />
        </Stack>
                      </Box> 
                  </Stack>
                </Box>
              </TableCell>

              <TableCell align="center" sx={{display:{xl:"flex",lg:"flex",md:"flex",sm:"flex",xs:"none"},  height:"135px"}}>
                <Box sx={{display:"flex", alignItems:"center"}}>
                <Stack sx={{display:"flex", flexDirection:"row", border:"1px solid gray",borderRadius:"5px", width:"160px", alignItems:"center", justifyContent:"space-between"}}>
        <Button sx={{}} onClick={()=> updateItemQuantity(row.id, row.quantity - 1)}  > <Typography sx={{fontSize:"15px", color:"black"}}>-</Typography> </Button>
        <Chip label={`${row.quantity}`} sx={{width:"55px", fontSize:"15px", border:"none", fontWeight:"bold"}}  variant="outlined" />
        <Button sx={{}} onClick={()=> updateItemQuantity(row.id, row.quantity + 1)} ><Typography sx={{fontSize:"15px", color:"black"}}>+</Typography></Button>
        </Stack> 
       <DeleteOutlinedIcon onClick={()=> removeItem(row.id)}   sx={{cursor:"pointer", fontSize:"30px", color:"#575656"}} />
       </Box>
              </TableCell>

              <TableCell align="right">
                <Typography  sx={{fontSize:"16px", fontWeight:"bold"}}>
                ₹ {parseInt(row.itemTotal)}

                </Typography>
                </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



      </Box>
    
    <Stack   sx={{width:"90%", margin:"0 auto", display:"flex",  flexDirection:"column", alignItems:{xl:"flex-end",lg:"flex-end",md:"flex-end",sm:"flex-start",xs:"flex-start"}, justifyContent:"center"}}>
      <Stack  sx={{display:"flex", flexDirection:"row",gap:"10px" ,alignItems:"center", justifyContent:"center"}}>
        <Typography sx={{fontSize:"20px"}}>
          Sub Total :
        </Typography>
         
      <Typography  sx={{fontSize:"30px"}}>
      ₹ {parseInt(cartTotal)}
      </Typography>
      </Stack>
      <Button onClick={()=> emptyCart()} sx={{color:"#fff", backgroundColor:"#d01418", width:"170px", '&:hover':{color:"#fff", backgroundColor:"black"}}}>
        Clear Cart
      </Button>
    </Stack>


   </Box> }      
    </div>
  )
}

export default Cart