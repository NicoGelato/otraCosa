// Me parece que voy a tener que crear un VideosYouTubeContainer para poder usar el Hook useEffect
import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  circularProgress: {
    marginTop: "100px",
    marginBottom: "100px",
    margin: "auto",
  },
  gridItem: {
    display: "flex",
    marginLeft: "auto",
    marginBottom: 20,
  },
  iframe: {
    "&:hover,&:active": {
      borderRadius: "10px",
      boxShadow: "0 0 25px #1B1B1B",
      transform: "scale(1.02)",
    },
  },
});

const VideosYouTube = ({ videos }) => {
  const styles = useStyles();

  const [limit, setLimit] = React.useState(4);

  const showMoreResults = () => { 
    setLimit(limit + 2);
  }

  return (
    <Container id="Videos" maxWidth="md">
      <Typography
        sx={{ paddingTop: "20px" }}
        variant="h4"
        component="h1"
        gutterBottom
      >
        {" "}
        Ultimos Videos{" "}
      </Typography>
      <Grid container spacing={4}>
        {!Array.isArray(videos) ? (
          <CircularProgress className={styles.circularProgress} />
        ) : (
          videos.slice(0, limit).map((video) => {
            return (
              <Grid
                item
                className={styles.gridItem}
                xs={12}
                md={6}
                key={video.id.videoId}
              >
                <iframe
                  className={styles.iframe}
                  width="480"
                  height="240"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="True"
                />
              </Grid>
            );
          })
        )}
      </Grid>
        <Box textAlign="center">
          <Button
            variant="outlined"
            onClick={() => {
              showMoreResults();
            }}
          >
            Ver más...
          </Button>
        </Box>
    </Container>
  );
};

export default VideosYouTube;
