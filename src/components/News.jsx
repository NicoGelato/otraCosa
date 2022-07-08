import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { StylesContext } from "@material-ui/styles";
import makeStyles from "@mui/styles/makeStyles";

import otraCosaPresentacion from "../images/otraCosaPresentacion.jpg";

const useStyles = makeStyles({
  card: {
    position: "relative",
    display: "flex",
    height: "300px",
    // width: "600px",
    //width="480"
  },
  cardContent: {
    padding: "20px",
    position: "relative",
    alignSelf: "flex-end",
    width: "100%",
    background: "linear-gradient(to top, #000, rgba(0,0,0,0.5))",
  },
  cardMedia: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    right: 0,
  },
});

const News = ({id}) => {
  const styles = useStyles();
  return (
    <Container id={id} my={3} maxWidth="md">
      <Typography
        sx={{ paddingTop: "20px" }}
        variant="h4"
        component="h1"
        gutterBottom
      >
        {" "}
        Novedades{" "}
      </Typography>
      <Card className={styles.card} sx={{ maxWidth: 345 }}>
        <CardMedia
          className={styles.cardMedia}
          component="img"
          height="100%"
          image={otraCosaPresentacion}
          alt="otraCosaPresentacion"
        />
        {/* <div style={{display: "flex"}}> */}
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="div">
            Proximamente
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
        {/* </div> */}

        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Container>
  );
};

export default News;
