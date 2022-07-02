import React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  StyledEngineProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import  Helmet  from "react-helmet";
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
      <Helmet>
        <title>Otra Cosa</title>
        <meta property="og:title" content="Otra Cosa" />
        <meta property="og:site_name" content="Otra Cosa" />
        <meta
          name="description"
          content="Pagina oficial de la banda Otra Cosa"
        />
        <meta
          property="og:description"
          content="Pagina oficial de la banda Otra Cosa"
        />
        <meta
          name="keywords"
          content="otra cosa, banda, rock, musica, canciones, recitales, presentaciones, pagina, oficial"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://otracosa.gatsbyjs.io/static/icon-a3ca93a2d3bece678d680e1219343071.png"
        />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:locale:alternate" content="es_LA" />
        <meta property="og:url" content="http://otracosa.gatsbyjs.io" />
        <link rel="canonical" href="http://otracosa.gatsbyjs.io" />
      </Helmet>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Helmet />
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
