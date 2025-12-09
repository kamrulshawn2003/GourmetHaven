document.addEventListener('DOMContentLoaded', function () {
  const firstRow = document.getElementById('first-row');
  const secondRow = document.getElementById('second-row');
  const thirdRow = document.getElementById('third-row');

  // Animate first row on page load
  if (firstRow) {
    firstRow.classList.add('slide-in-left');
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.id === 'second-row') {
          entry.target.classList.add('slide-in-right');
          observer.unobserve(entry.target);
        } else if (entry.target.id === 'third-row') {
          entry.target.classList.add('slide-in-left');
          observer.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.1 });

  if (secondRow) {
    observer.observe(secondRow);
  }
  if (thirdRow) {
    observer.observe(thirdRow);
  }
});

