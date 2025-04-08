const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
  reset: true,
});

sr.reveal(".hero-section,.feature-section, .count-section");
sr.reveal(".features-card", { interval: 100 });
