const box = document.querySelector(".box");
let images = Array.from(box.querySelectorAll("img"));

let startX = 0;
let isAnimating = false;

function updateZIndex() {
  images.forEach((img, i) => {
    img.style.zIndex = images.length - i;
  });
}

function rotate(direction) {
  if (isAnimating) return;
  isAnimating = true;

  const first = images[0];

  // Animate top image out based on direction
  if (direction === "left") {
    first.style.transform = "translateX(-250px) rotate(-25deg)";
  } else {
    first.style.transform = "translateX(250px) rotate(25deg)";
  }
  first.style.opacity = "0";

  setTimeout(() => {
    // Move first image to back
    images.push(images.shift());
    updateZIndex();

    // Reset position instantly (without transition)
    first.style.transition = "none";
    first.style.transform = "translateX(0) rotate(0)";
    first.style.opacity = "1";

    // Re-enable transition for future moves
    setTimeout(() => {
      first.style.transition = "transform 0.6s ease, opacity 0.6s ease";
      isAnimating = false;
    }, 50);
  }, 600);
}

// Detect cursor movement
box.addEventListener("mousemove", (e) => {
  if (startX === 0) {
    startX = e.clientX;
    return;
  }

  if (e.clientX < startX - 80) {
    rotate("left");
    startX = e.clientX;
  } else if (e.clientX > startX + 80) {
    rotate("right");
    startX = e.clientX;
  }
});

updateZIndex();
