let newsList = [];

//뉴스 가져오기 api
const getLatesNews = async () => {
  const url = new URL(
    ` https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines`
  );
  const response = await fetch(url);
  const date = await response.json();
  newsList = date.articles;
  render();
};

getLatesNews();

// 메뉴바
let side_btn = document.querySelector(".fa-bars");
let close_btn = document.querySelector(".fa-x");
let menulist = document.querySelector(".menus");

let menuSlideOn = () => (menulist.style.left = "0");
let menuSlideOff = () => (menulist.style.left = "-100%");

side_btn.addEventListener("click", menuSlideOn);
close_btn.addEventListener("click", menuSlideOff);

//검색창
let search_btn = document.querySelector(".fa-magnifying-glass");
let searchClick = false;
let searchArea = document.querySelector(".input-area");

let userSearch = () => {
  if (searchClick === false) {
    searchClick = true;
    searchArea.style.width = "100%";
    searchArea.style.opacity = "1";
  } else if (searchClick === true) {
    searchClick = false;
    searchArea.style.width = "0";
    searchArea.style.opacity = "0";
  }
};
search_btn.addEventListener("click", userSearch);

//ㅇㅇ
const menus = document.querySelectorAll(".menus button");
let inputText = document.querySelector("#user-search");
let goButton = document.querySelector("#go-button");
menus.forEach((menu) =>
  menu.addEventListener("click", (event) => {
    getNewsByCategory(event);
  })
);
goButton.addEventListener("click", () => {
  getNewsByKeyword();
});

// 카테고리 검색
const getNewsByCategory = async (event) => {
  const category = event.target.textContent.toLowerCase();
  console.log("category", category);
  const url = new URL(
    ` https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?category=${category}`
  );
  const response = await fetch(url);
  const date = await response.json();
  newsList = date.articles;
  render();
};
//검색기능
const getNewsByKeyword = async () => {
  const keyword = inputText.value;
  const url = new URL(
    ` https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?q=${keyword}`
  );
  const response = await fetch(url);
  const date = await response.json();
  newsList = date.articles;
  render();
};

//뉴스 보드 렌더
const render = () => {
  const newsHTML = newsList
    .map(
      (news) => `<div class="row news">
          <!--이미지-->
          <div class="col-lg-4">
            <img
              class="news-img-size"
              src="${
                news.urlToImage || "https://lrl.kr/xuco"
              }" onError="this.src='https://lrl.kr/xuco'"
            />
          </div>
          <!--글-->
          <div class="col-lg-8">
            <h2>${news.title || "제목없음"}</h2>
            <p>${
              news.description == null || news.description == ""
                ? "내용없음"
                : news.description.length > 200
                ? news.description.substr(0, 200) + "..."
                : news.description
            }</p>
            <div>${news.source.name || "no source"} // ${moment(
        news.publishedAt
      ).fromNow()}</div>
          </div>
        </div>`
    )
    .join("");

  document.getElementById("news-board").innerHTML = newsHTML;
};
