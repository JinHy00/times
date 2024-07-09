const API_KEY = `808d56a477c5434cb58b497bc9884b68`;
let news = date.articles;
const getLatesNews = async () => {
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
  const response = await fetch(url);
  const date = await response.json();
  news = date.articles;
  console.log("www", date.articles);
};

getLatesNews();
