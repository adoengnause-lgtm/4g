
document.addEventListener("DOMContentLoaded", function () {
  const background = document.querySelector(".hero-background");
  const scrollButton = document.querySelector(".scroll-button");

  // Animasi zoom halus pada foto pembuka
  if (
    background &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    background.animate(
      [
        { transform: "scale(1.08)" },
        { transform: "scale(1.02)" }
      ],
      {
        duration: 1500,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  }

  // Tombol panah menuju bagian media sosial
  if (scrollButton) {
    scrollButton.addEventListener("click", function (event) {
      const target = document.querySelector("#media-sosial");

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  }

  console.log("Website Alumni 2025 berhasil dimuat!");
});