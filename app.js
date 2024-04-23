const todoform = document.getElementById("form");
const productList = document.getElementById("productList");
const loader = document.querySelector(".rasm1");
const error = document.querySelector("#rasm1");
const remuve = document.querySelector(".btn1");
const darkmode = document.querySelector("#mode");
const darkimg = document.querySelector("#darkimg");
let todoarr = [];
todoform.addEventListener("submit", (e) => {
  error.classList.add("hidden");
  remuve.classList.remove("hidden");
  loader.classList.remove("hidden");
  e.preventDefault();
  console.log(
    ` https://api.unsplash.com/search/photos?client_id=78Za_OyGDRTzZShNGiAnv_q-5EkKlT9aiTr-stQCxzk&query=${searchinp.value}&per_page=20`
  );
  fetch(
    ` https://api.unsplash.com/search/photos?client_id=78Za_OyGDRTzZShNGiAnv_q-5EkKlT9aiTr-stQCxzk&query=${searchinp.value}&per_page=20`
  )
    .then((res) => res.json())
    .then((data) => {
      loader.classList.add("hidden");
      error.classList.add("hidden");
      crattodos(data.results);
      console.log(data.results);
      if ((data.results = [])) {
        // loader.classList.add("hidden");
        error.classList.remove("hidden");
      }
    })
    .catch((eror) => {
      console.log(1);
    });
  searchinp.value = "";
});
function crattodos(todoarr7) {
  productList.innerHTML = "";
  todoarr7.forEach(({ urls }) => {
    console.log(urls);
    const li = document.createElement("li");
    li.classList.add("item");
    li.innerHTML = `
   <img class="rasm" src="${urls.raw}" alt="">
   `;
    productList.append(li);
  });
}
remuve.addEventListener("click", () => {
  productList.innerHTML = "";
  error.classList.add("hidden");
  fetch(
    ` https://api.unsplash.com/search/photos?client_id=78Za_OyGDRTzZShNGiAnv_q-5EkKlT9aiTr-stQCxzk&query=real madrid&per_page=20`
  )
    .then((res) => res.json())
    .then((data) => {
      loader.classList.add("hidden");
      error.classList.add("hidden");
      crattodos(data.results);
      console.log(data.results);
    })
    .catch((eror) => {
      console.log(1);
    });
});

fetch(
  ` https://api.unsplash.com/search/photos?client_id=78Za_OyGDRTzZShNGiAnv_q-5EkKlT9aiTr-stQCxzk&query=real madrid&per_page=20`
)
  .then((res) => res.json())
  .then((data) => {
    loader.classList.add("hidden");
    error.classList.add("hidden");
    crattodos(data.results);
    console.log(data.results);
  })
  .catch((eror) => {
    console.log(1);
  });
if (localStorage.getItem("darkMode") === "dark") {
  document.body.classList.remove("light");
  darkmode.lastChild.textContent = "Light mode";
  darkimg.setAttribute("src", "./img/brightness.png");
  localStorage.setItem("darkMode", "dark");
} else {
  document.body.classList.add("light");
  darkmode.lastChild.textContent = "Dark mode";
  darkimg.setAttribute("src", "./img/night-mode.png");
  localStorage.setItem("darkMode", "light");
}
darkmode.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    darkmode.lastChild.textContent = "Light mode";
    darkimg.setAttribute("src", "./img/brightness.png");
    localStorage.setItem("darkMode", "dark");
  } else {
    document.body.classList.add("light");
    darkmode.lastChild.textContent = "Dark mode";
    darkimg.setAttribute("src", "./img/night-mode.png");
    localStorage.setItem("darkMode", "light");
  }
});
