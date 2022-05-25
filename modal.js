const images = document.querySelectorAll(".pictures img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");

images.forEach(image => {
  image.addEventListener("click", () => {
    modalImg.src = image.src;
    modal.classList.add("appear");
    modal.addEventListener("click", () => {
      modal.classList.remove("appear");
    });
  });
});