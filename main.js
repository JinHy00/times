// let news = [];
// const getLatesNews = async () => {
//   const url = new URL(
//     `https://idyllic-kelpie-95350e.netlify.app/top-headlines`
//   );
//   const response = await fetch(url);
//   const date = await response.json();
//   news = date.articles;
//   console.log("www", date.articles);
// };

// getLatesNews();

// const API_KEY = `808d56a477c5434cb58b497bc9884b68`;
let newsList = [];
const getNews = async () => {
  const url = new URL(
    `https://idyllic-kelpie-95350e.netlify.app/top-headlines`
  );
  console.log("111", url);
  const response = await fetch(url);
  const date = await response.json();
  newsList = date.articles;
  render();
  console.log("333", newsList);
};
const render = () => {
  const newsHTML = newsList
    .map(
      (news) => `<div class="row news">
          <div class="col-lg-4">
            <img class="news-img-size" src=${news.urlToImage} />
          </div>
          <div class="col-lg-8">
            <h2>${news.title}</h2>
            <p>${news.description || "내용 없음"}</p>
            <div>${news.source.name || "no source"} // ${moment(
        news.publishedAt
      ).fromNow()}</div>
          </div>
        </div>`
    )
    .join("");
  document.getElementById("news-board").innerHTML = newsHTML;
};

getNews();

const maxLength = 200;
if (news.description > maxLength) {
  news.description.textContent = news.description.slice(0, maxLength + "...");
} else {
  news.description.textContent = news.description;
}
console.log(newsHTML);
document.getElementById("news-board").innerHTML = newsHTML;

const sideBtn = document.querySelector(".side-bar");
const menu = document.querySelector(".side-menu");
sideBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const searchBtn = document.querySelector(".searchTool");
const searchInput = document.querySelector(".userSearch");
searchBtn.addEventListener("click", () => {
  searchInput.classList.toggle("userSearch");
});
