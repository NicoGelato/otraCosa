import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { getYouTubeApi } from "../apis/getYouTubeApi";
import VideosYouTube from "../components/VideosYouTube";

const VideosYouTubeContainer = () => {
  const [videos, setVideos] = useState([]);

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
  
  
  return <VideosYouTube videos={videos} />;
};

export default VideosYouTubeContainer;
