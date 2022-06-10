import React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  StyledEngineProvider
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "../components/Navbar";
import VideosYouTubeContainer from "../containers/VideosYouTubeContainer";
import HeroSection from "../components/HeroSection";

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
        <Navbar />
        <HeroSection />
        <VideosYouTubeContainer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default IndexPage;
