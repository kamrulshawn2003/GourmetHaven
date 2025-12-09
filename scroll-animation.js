document.addEventListener('DOMContentLoaded', function () {
  const box = document.getElementById('box');
  const projectCards = document.querySelectorAll('.project-card');
  console.log('scroll-animation.js loaded, box element:', box);
  console.log('Project cards found:', projectCards.length);

  if (!box) {
    console.warn('Element with id "box" not found.');
    return;
  }

  // Remove initial animation classes if present
  box.classList.remove('slide-in-left');
  projectCards.forEach(card => {
    card.classList.remove('slide-in-left');
    card.classList.remove('slide-in-right');
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log('IntersectionObserver entry:', entry);
      if (entry.isIntersecting) {
        if (entry.target.id === 'box') {
          console.log('Box is intersecting, adding animation class.');
          entry.target.classList.add('slide-in-left');
          observer.unobserve(entry.target); // Animate only once
        } else if (entry.target.classList.contains('project-card')) {
          console.log('Project card is intersecting, adding animation class.');
          const index = Array.from(projectCards).indexOf(entry.target);
          if (index % 2 === 0) {
            entry.target.classList.add('slide-in-left');
          } else {
            entry.target.classList.add('slide-in-right');
          }
          observer.unobserve(entry.target); // Animate only once
        }
      }
    });
  }, { threshold: 0.1 });

  observer.observe(box);
  projectCards.forEach(card => observer.observe(card));
});
