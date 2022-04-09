import styled from '@emotion/styled'
import { AppBar } from '@mui/material'
import React from 'react'

const FooterContainer = styled(AppBar)`
    bottom:0;
    min-height: 100px;
    box-shadow: 0px -2px 4px -1px rgb(0 0 0 / 20%), 0px -4px 5px 0px rgb(0 0 0 / 14%), 0px -1px 10px 0px rgb(0 0 0 / 12%);
}
   
`
 // box-shadow: 0px 2px 4px 5px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
export default function Footer() {
  return (
    <FooterContainer sx={{position:'relative'}} elevation={-1}> Footer </FooterContainer>
  )
}
