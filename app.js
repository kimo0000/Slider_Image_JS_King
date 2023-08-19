const contentImg = document.querySelector(".content");
const images = document.querySelectorAll("img");
const arrowLeft = document.getElementById("left");
const arrowRight = document.getElementById("right");

// let count = 1;
let counter = 0;
let timer = null;

// images.forEach((img, i) => {
//     img.style.left = `${i * count}00%`;
// })

timer = setInterval(() => {
  counter++;
  slider();
}, 1000);

arrowRight.addEventListener("click", () => {
  counter++;
  clearInterval(timer);
  slider();
});

arrowLeft.addEventListener("click", () => {
  counter--;
  clearInterval(timer);
  slider();
});

function slider() {
  if (counter === images.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = images.length - 1;
  }

  contentImg.style.transform = `translateX(-${counter}00%)`;
  // console.log(counter)
}

slider();
