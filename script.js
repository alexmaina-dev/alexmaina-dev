document.getElementById('year').textContent = new Date().getFullYear();

const hero = document.querySelector('.hero');
if (hero && !document.querySelector('.hero-console')) {
  hero.insertAdjacentHTML('beforeend', `<aside class="hero-console" aria-label="Developer status">
    <div class="console-bar"><span></span><span></span><span></span><b>mainadev.me</b></div>
    <p><i>const</i> engineer = {</p>
    <p class="indent">name: <strong>'Alessandro Mainardi'</strong>,</p>
    <p class="indent">education: <strong>'UniBo (Computer Eng)'</strong>,</p>
    <p class="indent">focus: [<strong>'Cloud Systems'</strong>, <strong>'M365'</strong>, <strong>'DevOps'</strong>],</p>
    <p class="indent">status: <strong>'available'</strong></p>
    <p>};<em>_</em></p>
  </aside>`);
}

const revealItems = document.querySelectorAll('.project, .doc-card, .about-grid, .contact > *');
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
