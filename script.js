document.getElementById('year').textContent = new Date().getFullYear();

const visualLayer = document.createElement('link');
visualLayer.rel = 'stylesheet';
visualLayer.href = 'v3.css';
document.head.appendChild(visualLayer);

const hero = document.querySelector('.hero');
if (hero && !document.querySelector('.hero-console')) {
  hero.insertAdjacentHTML('beforeend', `<aside class="hero-console" aria-label="Developer status">
    <div class="console-bar"><span></span><span></span><span></span><b>maina.dev</b></div>
    <p><i>const</i> developer = {</p><p class="indent">focus: <strong>'web + cloud'</strong>,</p><p class="indent">status: <strong>'building'</strong></p><p>};<em>_</em></p>
  </aside>`);
}

const revealItems = document.querySelectorAll('.project, .about-grid, .contact > *');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => {
  item.classList.add('reveal');
  observer.observe(item);
});
