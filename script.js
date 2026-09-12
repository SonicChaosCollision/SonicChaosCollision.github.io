document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".character-card");

  // Observer config for scroll reveal / conceal
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15 // Triggers when 15% of the card is visible
  };

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Scroll Down: Card enters screen -> Fade/Slide In
        entry.target.classList.add("visible");
      } else {
        // Scroll Up/Away: Card leaves screen -> Fade/Slide Out
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  cards.forEach((card) => cardObserver.observe(card));
});
