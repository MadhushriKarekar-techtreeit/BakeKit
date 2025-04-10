const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
  reset: true,
});

sr.reveal(".hero-section,.feature-section, .count-section,.about-section .text, .about-section .image");
sr.reveal(".feature-section .card,.count-card", { interval: 200 });
sr.reveal(".category .card", { interval: 200 });
sr.reveal(".menu", { interval: 200 });
