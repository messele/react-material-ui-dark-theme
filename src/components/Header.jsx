import { AppBar, Toolbar, IconButton, Typography, MenuItem, Menu, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import Logo from './Logo'
import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';


const HeaderTitle = styled(Typography)`
    flex:1
`
export default function Header() {
    return (
        <AppBar position='sticky'>
            <Toolbar variant="dense">
                <Logo className="App-logo" />
                <Link  component={RouterLink} to="/">Home</Link>
                <Link  component={RouterLink} to="/contact">Contact Us</Link>
                <Link   component={RouterLink} to="/about">About</Link>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    {/* <MenuIcon >
                    <Menu open>
                        <MenuItem> </MenuItem>
                        <MenuItem> <Link  component={RouterLink} to="/">Home</Link></MenuItem>
                        <MenuItem> <Link  component={RouterLink} to="/">Home</Link></MenuItem>
                    </Menu>
                    </MenuIcon> */}
                </IconButton >
                <HeaderTitle >
                    HeaderTitle
                </HeaderTitle>

             
            </Toolbar>
        
        </AppBar>
        // <AppBar>
        //      <Toolbar variant="dense">
        //         <Link component={RouterLink} to="/">Home</Link>
        //         <Link component={RouterLink} to="/contact">Contact Us</Link>
        //         <Link component={RouterLink} to="/about">About</Link>
        //     </Toolbar>
        // </AppBar>
    )
}
