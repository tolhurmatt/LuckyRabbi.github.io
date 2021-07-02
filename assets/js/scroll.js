window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav ul li a[href="#${id}"]`).parentElement.classList.add('active');
        console.log("Intersect!")
      } else {
        document.querySelector(`nav ul li a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('h1[id], h2[id], h3[id], h4[id]').forEach((section) => {
    observer.observe(section);
  });
  
});