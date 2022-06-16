export const getYouTubeApi = async () => {
  //Pensar como agregar esto como opcion
  //&maxResults=${results}
  try {
    const youTubeApi = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAZSavwxYnudAGgTWXsB4f-bkvoD2AWEPQ&channelId=UCGtktNjRa7gLfhHA1R_5n1w&part=snippet,id&order=date&maxResults=50`
    );
    const response = await youTubeApi.json();

    return response;
  } catch (error) {
    console.log(error);
  }
};
