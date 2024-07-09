let news = [];
const getLatesNews = async () => {
  const url = new URL(
    `https://idyllic-kelpie-95350e.netlify.app/top-headlines`
  );
  const response = await fetch(url);
  const date = await response.json();
  news = date.articles;
  console.log("www", date.articles);
};

getLatesNews();
