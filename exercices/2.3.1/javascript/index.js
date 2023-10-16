const form = document.querySelector(".formWrapper");
const message = document.querySelector(".messageWish");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("here");
  let wishFromForm = document.getElementById('wish').value;
  document.getElementById('wishID').innerHTML = wishFromForm;
  form.style.display = "none";
});