import Post from './views/Post.js';
import PostTech from './views/PostTech.js';
import PostDesign from './views/PostDesign.js';
import PostView from './views/PostView.js';
import NotFound from './views/NotFound.js';

// 경로를 입력으로 받아 정규 표현식으로 변환하는 함수
const pathToRegex = path =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

// 일치하는 경로에서 매개변수를 추출하는 함수
const getParams = match => {
  const values = match.isMatch.slice(1);
  const keys = Array.from(match.route.path.match(/:(\w+)/g) || []).map(isMatch => isMatch[1]);
  return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
};

// 라우터 함수
const router = async () => {
  const routes = [
    { path: '/', view: Post },
    { path: '/index.html', view: Post },
    { path: '/tech', view: PostTech },
    { path: '/design', view: PostDesign },
    { path: '/article/:id', view: PostView },
  ];

  // 경로와 현재 경로를 비교하여 일치하는지 확인
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname.match(pathToRegex(route.path)),
    };
  });

  // 일치하는 경로 찾기
  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
  if (!match) {
    match = {
      route: { path: '/404', view: NotFound },
      isMatch: [location.pathname],
    };
  }
  // 선택된 뷰를 반환
  const view = new match.route.view(getParams(match));
  document.querySelector('#app').innerHTML = await view.getHtml();
};

// URL 탐색 기능
const navigateTo = async url => {
  history.pushState(null, null, url);
  router();
};

// 브라우저의 뒤로 가기 및 앞으로 가기 버튼 동작을 처리
window.addEventListener('popstate', router);

// DOMContentLoaded 이벤트가 발생하면 라우터를 초기화
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data_link]') || e.target.closest('[data_link]')) {
      e.preventDefault();
      const link = e.target.closest('[data_link]');
      navigateTo(link.href);
    }
  });
  router();
});

export { navigateTo };
