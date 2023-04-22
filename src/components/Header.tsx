import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { DataContext } from '../App';

export default function Header() {
    const data = useContext(DataContext);
  return (
    <Box sx={{paddingBottom: 5, width:"100%"}}>
      <AppBar position="static" sx={{background:"black"}}>
        <Toolbar>
            <img
            src={data ? data.team.logo : "https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg"}
            alt="Logo"
            height="100"
            />
            <Typography variant="h2" sx={{paddingInline:5}}>{data ? data.team.displayName : "Not found"}</Typography>
        </Toolbar>
      </AppBar>
      </Box>
  )
}
