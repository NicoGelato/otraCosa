// Me parece que voy a tener que crear un VideosYouTubeContainer para poder usar el Hook useEffect
import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import makeStyles from "@mui/styles/makeStyles";
import Skeleton from "@mui/material/Skeleton";

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
      boxShadow: "0 0 30px #1B1B1B",
      transform: "scale(1.02)",
    },
  },
});

const VideosYouTube = ({ videos, id }) => {
  const styles = useStyles();

  const [limit, setLimit] = React.useState(4);
  const [tardoMucho, setTardoMucho] = React.useState(false);

  React.useEffect(() => {
    const esperarTreintaSeg = setTimeout(() => {
      setTardoMucho(true);
    }, 10000);
    return () => {
      clearTimeout(esperarTreintaSeg);
    };
  }, []);

  const showMoreResults = () => {
    setLimit(limit + 2);
  };

  return (
    <Container id={id} maxWidth="md">
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
        {!Array.isArray(videos) || videos.length === 0 ? (
          tardoMucho ? (
            <Grid item className={styles.gridItem} xs={12}>
              <Box
                sx={{
                  padding: "20px",
                  backdropFilter: "blur(2px)",
                  backgroundColor: "rgba(0,0,5,0.7)",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="h5">
                  No se pudieron cargar los videos, intente más tarde
                </Typography>
              </Box>
            </Grid>
          ) : (
            [1, 2, 3, 4].map((e) => {
              return (
                <Grid key={e} item className={styles.gridItem} xs={12} md={6}>
                  <Skeleton variant="rectangular" width={480} height={240} />
                </Grid>
              );
            })
          )
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
