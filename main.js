let myTabs = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const delBtn = document.getElementById("del-btn");
const outputEl = document.getElementById("output-el");
const tabsFromLocalStorage = JSON.parse(localStorage.getItem("myTabs"));

if (tabsFromLocalStorage) {
  myTabs = tabsFromLocalStorage;
  render(myTabs);
}
function render(tabs) {
  console.log(myTabs);
  let listItem = "";
  for (i = 0; i < tabs.length; i += 1) {
    listItem += `<li class="mt-2 text-1xl font-bold list-none">
        <a href = "${tabs[i]}" target="_blank">${tabs[i]}</a>
        </li>`;
  }
  outputEl.innerHTML = listItem;
  inputEl.value = " ";
}

inputBtn.addEventListener("click", function () {
  myTabs.push(inputEl.value);
  console.log("clicked");
  localStorage.setItem("myTabs", JSON.stringify(myTabs));
  render(myTabs);
});

delBtn.addEventListener("click", function () {
  myTabs = [];
  outputEl.innerHTML = [];
  localStorage.clear();
});

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let url = tabs[0].url;
    console.log(url);
    myTabs.push(url);
    localStorage.setItem("myTabs", JSON.stringify(myTabs));
    render(myTabs);
  });
});