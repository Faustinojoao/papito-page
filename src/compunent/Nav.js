import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon"
import { Link } from 'react-router-dom'
import papitoProfile from "../image/papito profilr.jpg";

export default function Nav() {
  return (
    <AppBar>
        <Toolbar>
            <IconButton size='large' edge="start" color='inherit' aria-label='logo'>
                <img style={{width:"50px", height:"50px", borderRadius:"50%"}} src={papitoProfile} alt='image is not availeble'/>
            </IconButton>
            <Typography variant='h6' component="div" sx={{flexGrow:1}}>
                
                <Link to={"/"} style={{ color: "inherit", textDecoration:"none" }}>
                PAPITO CEILING
            </Link>
            </Typography>
            <Stack direction="row" spacing={2}>
            <Link to={"/all-jobs"} style={{ color: "inherit", textDecoration:"none" }}>
                All Picture
            </Link>
            <Link to={"/videos-page"} style={{ color: "inherit", textDecoration:"none" }}>
                All Vidios
            </Link>
           
               
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
