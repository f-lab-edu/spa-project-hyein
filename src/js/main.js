const topBtn = document.querySelector('.top_btn');

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});
