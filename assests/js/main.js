const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
  reset: true,
});

sr.reveal(".hero-section,.feature-section, .count-section");
sr.reveal(".feature-section .card,.count-card", { interval: 200 });
sr.reveal(".category .card", { interval: 200 })
sr.reveal(".menu", { interval: 200 });
sr.reveal(".about .image", { origin: "left" });
sr.reveal(".about .text", { origin: "right" });
