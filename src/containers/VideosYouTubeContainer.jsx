import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { getYouTubeApi } from "../apis/getYouTubeApi";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import VideosYouTube from "../components/VideosYouTube";
import backgroundOtraCosa from "../images/backgroundOtraCosa_Songs_1.png";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${backgroundOtraCosa})`,
    paddingBottom: "10px",
  },
});

const VideosYouTubeContainer = () => {
  const styles = useStyles();

  const [videos, setVideos] = useState([]);
  const [results, setResults] = useState(4);

  const showMoreResults = () => {
    setResults(results + 2);
  };

  const getYouTubeApiData = async (results) => {
    try {
      const response = await getYouTubeApi(results);
      const items = await response.items;
      setVideos(items);
      return items;
    } catch (error) {
      console.log(error);
    }
  };

  const videosList = useCallback(() => {
    return getYouTubeApiData(results);
  }, [results]);

  useEffect(() => {
    setVideos(videosList);
  }, [videosList]);

  return (
    <div className={styles.background} id="Videos">
      <VideosYouTube videos={videos} />
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
    </div>
  );
};

export default VideosYouTubeContainer;
