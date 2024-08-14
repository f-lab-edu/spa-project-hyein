import Router from '@router';
import Navigate from '@navigate';
import Post from '@views/Post';
import PostTech from '@views/PostTech';
import PostDesign from '@views/PostDesign';
import PostView from '@views/PostView';
import NotFound from '@views/NotFound';

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

export const navigateTo = url => {
  const router = Router.init(routes);
  const navigate = new Navigate(router);
  navigate.navigateTo(url);
};
