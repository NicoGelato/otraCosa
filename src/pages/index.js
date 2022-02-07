import React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  StyledEngineProvider
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ButtonAppBar from "../components/Navbar";

let darkTheme = createTheme(
  {
    palette: {
      mode: 'dark',
    }
  }
);

darkTheme = responsiveFontSizes(darkTheme);

const IndexPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ButtonAppBar />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default IndexPage;
