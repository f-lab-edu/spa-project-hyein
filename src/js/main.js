class ScrollManager {
  constructor(buttonSelector) {
    this.topBtn = document.querySelector(buttonSelector);
    this.init();
  }

  init() {
    this.topBtn.addEventListener('click', () => this.scrollToTop());
    window.addEventListener('scroll', () => this.toggleButtonVisibility());
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleButtonVisibility() {
    this.topBtn.classList.toggle('show', window.scrollY > 100);
  }
}

// Initialize ScrollManager
new ScrollManager('.top_btn');
