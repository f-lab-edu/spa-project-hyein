import Router from './router.js';
import Navigate from './navigate.js';
import Post from './views/Post.js';
import PostTech from './views/PostTech.js';
import PostDesign from './views/PostDesign.js';
import PostView from './views/PostView.js';
import NotFound from './views/NotFound.js';

const routes = [
  { path: '/', view: Post },
  { path: '/index.html', view: Post },
  { path: '/tech', view: PostTech },
  { path: '/design', view: PostDesign },
  { path: '/article/:id', view: PostView },
  { path: '/404', view: NotFound },
];

document.addEventListener('DOMContentLoaded', () => {
  const router = Router.init(routes);
  const navigate = new Navigate(router);
  navigate.initializeNavigation();
});
