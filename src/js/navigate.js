class Navigate {
  constructor(router) {
    this.router = router;
  }

  navigateTo(url) {
    history.pushState(null, null, url);
    this.router.loadRoute();
  }

  initializeNavigation() {
    document.body.addEventListener('click', e => {
      if (e.target.matches('[data_link]') || e.target.closest('[data_link]')) {
        e.preventDefault();
        const link = e.target.closest('[data_link]');
        this.navigateTo(link.href);
      }
    });
  }
}

export default Navigate;
