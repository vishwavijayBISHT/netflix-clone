const API_KEY = "502bb190ecac9adb7f3a8881dc2ce1cf";

const request = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchTop: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchAction: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchComedy: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorror: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  fetchRomance: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocu: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

export default request;
