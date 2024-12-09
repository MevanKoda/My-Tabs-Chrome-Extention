let tabs = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const delBtn = document.getElementById("del-btn");
const outputEl = document.getElementById("output-el");
const tabsFromLocalStorage = JSON.parse(localStorage.getItem("tabs"));

if (tabsFromLocalStorage) {
  tabs = tabsFromLocalStorage;
  render();
}
function render() {
  console.log(tabs);
  let listItem = "";
  for (i = 0; i < tabs.length; i += 1) {
    listItem += `<li class="mt-2 text-2xl font-bold list-none">
        <a href = "${tabs[i]}" target="_blank">${tabs[i]}</a>
        </li>`;
  }
  outputEl.innerHTML = listItem;
  inputEl.value = " ";
}

inputBtn.addEventListener("click", function () {
  tabs.push(inputEl.value);
  console.log("clicked");
  localStorage.setItem("tabs", JSON.stringify(tabs));
  render();
});

delBtn.addEventListener("click", function () {
  tabs = [];
  outputEl.innerHTML = [];
  localStorage.clear();
});
