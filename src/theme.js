
// import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { green} from '@mui/material/colors';
// import {Link as RouterLink}    from 'react-router-dom'



// const LinkBehavior = React.forwardRef((props, ref) => {
//   const { href, ...other } = props;
//   // Map href (MUI) -> to (react-router)
//   return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
// });
const theme = createTheme({
  palette: {
    primary: {
      main: '#719360',
     // light: '#d9e8ca',
      dark: '#0A1915'
    },
    secondary: {
      main: green[500],
      //dark: '#0A1915'
    },

    // background: {
    //   paper: '#232f3e',
    //   // dark: 'red'
    //  },
    // text: {
    //   paper: '#719360',
    //   //secondary: '#d9e8ca',
    // },
  },
  // components: {
  //   MuiLink: {
  //     defaultProps: {
  //       component: LinkBehavior,
  //     },
  //   },
  //   MuiButtonBase: {
  //     defaultProps: {
  //       LinkComponent: LinkBehavior,
  //     },
  //   },
  // },
});

export default theme;



