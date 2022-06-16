import React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  StyledEngineProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Navbar";
import VideosYouTubeContainer from "../containers/VideosYouTubeContainer";
import HeroSection from "../components/HeroSection";
import SocialFooter from "../components/SocialFooter";
import WhatsappWidget from "../components/WhatsappWidget";

let darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Consolas, Arial",
  },
});

darkTheme = responsiveFontSizes(darkTheme);

const IndexPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <HeroSection />
        <VideosYouTubeContainer />
        <SocialFooter />
        <WhatsappWidget />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default IndexPage;
