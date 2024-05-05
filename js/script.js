const open = document.querySelector(".donate");
const close = document.getElementById("close")
const modal = document.getElementById("modal");

open.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn2")) {
    modal.classList.add("open");
  }
});

close.addEventListener("click", (event) => {
      modal.classList.remove("open");
  });