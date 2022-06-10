export const getYouTubeApi = async () => {
  try {
    const youTubeApi = await fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCHW15Uojw2BJHAB5lXaPnZN6oAiHqGQhI&channelId=UCGtktNjRa7gLfhHA1R_5n1w&part=snippet,id&order=date&maxResults=6"
    );
    const response = await youTubeApi.json();

    return response;
  } catch (error) {
    console.log(error);
  }
};

// Ver videos sobre async/await:
