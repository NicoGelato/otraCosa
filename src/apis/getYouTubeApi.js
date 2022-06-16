export const getYouTubeApi = async (results = 4) => {
  try {
    const youTubeApi = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCHW15Uojw2BJHAB5lXaPnZN6oAiHqGQhI&channelId=UCGtktNjRa7gLfhHA1R_5n1w&part=snippet,id&order=date&maxResults=${results}`
    );
    const response = await youTubeApi.json();

    return response;
  } catch (error) {
    console.log(error);
  }
};

// Ver videos sobre async/await:
