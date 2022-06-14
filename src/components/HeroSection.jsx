import * as React from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import backgroundVideo from "../videos/backgroundVideo_otraCosa.mp4";
import makeStyles from "@mui/styles/makeStyles/makeStyles";

const useStyles = makeStyles(
  {
    backgroundVideo: {
      position: "absolute",
      width: "100%",
      objectFit: "cover",
      height: "inherit",
    },
    paper: {
      height: "85vh",
      position: "relative",
      overflow: "hidden",
      marginBottom: "20px",
    },
    container: {
      width: "100%",
    },
    contend: {
      height: "100%",
    },
    backDrop: {
      backdropFilter: "blur(3px)",
      backgroundColor: "rgba(0,0,10,0.3)",
      padding: "9vh",
      borderRadius: "3px",
      textShadow: "0px 0px 7px #000000",
    }
  },
  { index: 1 }
);

const HeroSection = () => {
  const styles = useStyles();

  // El tiempo que tardan en aparecer los grows en el backDrop
  const [showInOne, setShowInOne] = React.useState(false);
  const [showInTwo, setShowInTwo] = React.useState(false);
  const [showInFour, setShowInFour] = React.useState(false);
  const [showInFive, setShowInFive] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShowInOne(true);
    }, 1000);

    setTimeout(() => {
      setShowInTwo(true);
    }, 2000);

    setTimeout(() => {
      setShowInFour(true);
    }, 3500);

    setTimeout(() => {
      setShowInFive(true);
    }, 5000);
  }, []);
  return (
    <>
      <Paper className={styles.paper} elevation={0}>
        <video
          className={styles.backgroundVideo}
          src={backgroundVideo}
          type="video/mp4"
          loop
          muted
          autoPlay
        ></video>
        <Container className={styles.container} maxWidth="md">
          <Grid
            container
            className={styles.contend}
            alignItems="center"
            justifyContent="space-between"
            style={{ minHeight: "50vh" }}
          >
            <Grid item className={styles.backDrop} sm={9}>
              <Grow in={showInOne}>
                <Box my={1}>
                  <Typography
                    componet="h1"
                    variant="h3"
                  >
                    Ey vos,
                  </Typography>
                </Box>
              </Grow>
              <Grow in={showInTwo}>
                <Box my={1}>
                  <Typography componet="h1" variant="h3">
                    ¿Estas cansado de todo?
                  </Typography>
                </Box>
              </Grow>
              <Grow in={showInFour}>
                <Box my={1}>
                  <Typography componet="h1" variant="h3">
                    Mejor probá con
                  </Typography>
                </Box>
              </Grow>
              <Grow in={showInFive}>
                <Box my={1}>
                  <Typography componet="h1" variant="h2">
                    Otra Cosa
                  </Typography>
                </Box>
              </Grow>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};

export default HeroSection;
