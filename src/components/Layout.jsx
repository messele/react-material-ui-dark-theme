import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'
import { Box, Button, Paper, createTheme, ButtonGroup } from '@mui/material';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
//import Header from './Header'
import ResponsiveAppBar from './ResponsiveAppBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import darkTheme from '../darkTheme';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { Mode } from '../constants';

const Body = styled(Box)`
  display:flex;
  flex:1;
`

function Layout(props) {


  const changeMode = (mode) => {
    props.dispatch(actions.changeMode(mode))
  }

  const { mode } = props;

  const currTheme = React.useMemo(
    () =>
      createTheme(
        mode === Mode.DARK ? darkTheme : theme,
        {
          palette: {
            mode,

          }
        }),
    [mode]);

  //const currentTheme = Mode.DEFAULT ? theme : darkTheme;
  //const colorMode = 

  return (
    // <ColorModeContext.Provider value={colorMode}>

    <ThemeProvider theme={currTheme}>
      <Paper sx={{ bgcolor: "primary", height: '100vh', padding: '0 !important', display: 'flex', flexDirection: 'column' }} maxWidth={true} back >
        <ButtonGroup>
          <Button disabled={mode === Mode.DEFAULT} onClick={() => changeMode(Mode.DEFAULT)}>Light</Button>
          <Button disabled={mode === Mode.DARK} onClick={() => changeMode(Mode.DARK)}>Dark</Button>
        </ButtonGroup>
        <ResponsiveAppBar props={props} />

        <Body sx={{ bgcolor: 'primary' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Body>
        <Footer />
      </Paper>
    </ThemeProvider>
    //  </ColorModeContext.Provider>
  )
}

const mapStateToProps = state => ({
  mode: state.mode

});
export default connect(mapStateToProps)(Layout);
