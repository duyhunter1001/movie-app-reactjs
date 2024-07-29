export const TRENDING_TABS = [
  {
    name: "All",
    type: "all",
    url: "https://api.themoviedb.org/3/trending/all/day?language=en-US",
  },
  {
    name: "Movie",
    type: "movie",
    url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  },
  {
    name: "TV Show",
    type: "tv",
    url: "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
  },
];

export const TOP_RATED_TABS = [
    {
      name: "Movie",
      type: "movie",
      url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    },
    {
      name: "TV Show",
      type: "tv",
      url: "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    },
  ];