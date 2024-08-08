import { navigateTo } from '../src/js/index';

// 각 뷰 모듈의 getHtml 메서드를 mocking
jest.mock('../src/js/views/Post', () =>
  jest.fn().mockImplementation(() => ({
    getHtml: jest.fn().mockResolvedValue('<div>Post</div>'),
  })),
);

jest.mock('../src/js/views/PostTech', () =>
  jest.fn().mockImplementation(() => ({
    getHtml: jest.fn().mockResolvedValue('<div>PostTech</div>'),
  })),
);

jest.mock('../src/js/views/PostDesign', () =>
  jest.fn().mockImplementation(() => ({
    getHtml: jest.fn().mockResolvedValue('<div>PostDesign</div>'),
  })),
);

jest.mock('../src/js/views/PostView', () =>
  jest.fn().mockImplementation(() => ({
    getHtml: jest.fn().mockResolvedValue('<div>PostView</div>'),
  })),
);

describe('router 기능 확인하기', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>'; // #app 초기화
    window.history.pushState({}, '', '/'); // 초기 경로 설정
  });

  test('"/"로 이동하면 Post전체가 로드', async () => {
    await navigateTo('/'); // 루트 경로로 이동
    expect(document.querySelector('#app').innerHTML).toContain('Post'); // Post가 로드되었는지 확인
  });

  test('"/tech"로 이동하면 PostTech가 로드', async () => {
    await navigateTo('/tech');
    expect(document.querySelector('#app').innerHTML).toContain('PostTech');
  });

  test('"/design"로 이동하면 PostDesign가 로드', async () => {
    await navigateTo('/design');
    expect(document.querySelector('#app').innerHTML).toContain('PostDesign');
  });

  test('"/article/1"로 이동하면 PostView가 로드', async () => {
    await navigateTo('/article/1');
    expect(document.querySelector('#app').innerHTML).toContain('PostView');
  });
});
