export const OFFSITE_CHAT_COUNT = 20;

export const API_KEY = "AIzaSyB694MF5nkadLYqZf28uT1bzmhW-wr1WRc";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_LISTS =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=" +
  API_KEY;

export const categories = [
  "All",
  "Music",
  "Sports",

  "Gaming",

  "Comedy",

  "Education",
  "Movies",
  "Classics",
  "Comedy",

  "Drama",
  "Family",
  "Foreign",
  "Horror",
  "Thriller",
  "Shorts",
  "Shows",
  "Trailers",
];

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&forMine=true&maxResults=25&q=fun&type=video&key=";
