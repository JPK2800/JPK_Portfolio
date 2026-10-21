
document.querySelectorAll("[data-slideshow]").forEach((slideshow) => {
  // Read the image filenames for this specific project
  const images = JSON.parse(slideshow.dataset.images);

  const imageElement = slideshow.querySelector(".slide-image");
  const previousButton = slideshow.querySelector(".prev");
  const nextButton = slideshow.querySelector(".next");
  const counter = slideshow.querySelector(".slide-counter");

  let currentIndex = 0;

  function showImage(index) {
    currentIndex = (index + images.length) % images.length;

    imageElement.src = images[currentIndex];
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
  }

  previousButton.addEventListener("click", () => {
    showImage(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showImage(currentIndex + 1);
  });

  showImage(0);
});