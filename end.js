const $buttonOpen = document.querySelector("#open");
const $buttonAlert = document.querySelector("#button");
const $divHidden = document.querySelector(".hidden");

$buttonAlert.addEventListener("click", () => {
  alert("Hello JavaScript");
  console.log("Hello World");
  $divHidden.style.display = "none";
});

$buttonOpen.addEventListener("click", () => {
  $divHidden.style.display = "block";
});
