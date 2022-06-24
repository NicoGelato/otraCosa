import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { getYouTubeApi } from "../apis/getYouTubeApi";
import VideosYouTube from "../components/VideosYouTube";

const VideosYouTubeContainer = ({id}) => {
<<<<<<< HEAD
  const [videos, setVideos] = useState([]);
=======
  const [videos, setVideos] = useState(null);
>>>>>>> 880a4bafdc69e2170822aaca9ed26301dc8cae95

  const getYouTubeApiData = async () => {
    try {
      const response = await getYouTubeApi();
      const items = await response.items;
      setVideos(items);
      return items;
    } catch (error) {
      console.log(error);
    }
  };

  const videosList = useCallback(() => {
    return getYouTubeApiData();
  }, []);

  useEffect(() => {
    setVideos(videosList);
  }, [videosList]);

  return <VideosYouTube id={id} videos={videos} />;
};

export default VideosYouTubeContainer;
