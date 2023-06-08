const mode_btn = document.querySelector(".mode-btn");
const container = document.querySelector(".container");
// Dark to Light Mode
const dark_to_light = () => {
  container.style = "background:black";
  mode_btn.innerHTML = "Light Mode";
};

//   light to Dark Mode
const light_to_dark = () => {
  container.style = "background:white";
  mode_btn.innerHTML = "Dark Mode";
};

mode_btn.addEventListener("click", () => {
  if (mode_btn.innerHTML == "Dark Mode") {
    dark_to_light();
  } else {
    light_to_dark();
  }
});