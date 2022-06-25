import React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  StyledEngineProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
// import News from "../components/News";
import VideosYouTubeContainer from "../containers/VideosYouTubeContainer";
import Mailer from "../components/Mailer";
import SocialFooter from "../components/SocialFooter";
import WhatsappWidget from "../components/WhatsappWidget";
import backgroundOtraCosa from "../images/backgroundOtraCosa_Songs_1.png";
import makeStyles from "@mui/styles/makeStyles/makeStyles";

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${backgroundOtraCosa})`,
    paddingBottom: "10px",
    backgroundAttachment: "fixed",
  },
});

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
  const styles = useStyles();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <HeroSection />
        <main className={styles.background}>
          {/* <News /> */}
          <VideosYouTubeContainer id="Videos" />
          <Mailer id="Contacto" />
        </main>
        <SocialFooter />
        <WhatsappWidget />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default IndexPage;
