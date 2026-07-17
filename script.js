document.getElementById('year').textContent = new Date().getFullYear();
const revealItems = document.querySelectorAll('.project, .about-grid, .contact > *');
const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.12 });
revealItems.forEach((item) => { item.classList.add('reveal'); observer.observe(item); });
