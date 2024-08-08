class Router {
  constructor(routes) {
    this.routes = routes;
    window.addEventListener('popstate', () => this.loadRoute());
  }

  pathToRegex(path) {
    return new RegExp(`^${path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)')}$`);
  }

  getParams(match) {
    const values = match.isMatch.slice(1);
    const keys = Array.from(match.route.path.match(/:(\w+)/g) || []).map(key => key.slice(1));
    return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
  }

  async loadRoute() {
    const potentialMatches = this.routes.map(route => ({
      route,
      isMatch: location.pathname.match(this.pathToRegex(route.path)),
    }));

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch) || {
      route: { path: '/404', view: NotFound },
      isMatch: [location.pathname],
    };

    const view = new match.route.view(this.getParams(match));
    document.querySelector('#app').innerHTML = await view.getHtml();
  }

  static init(routes) {
    const routerInstance = new Router(routes);
    routerInstance.loadRoute();
    return routerInstance;
  }
}

export default Router;
