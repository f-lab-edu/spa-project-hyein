import AbstractView from '@abstract';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('페이지를 찾을 수 없습니다.');
  }

  async getHtml() {
    return `
      <section class="not_fount_page">
        <div class="inner">
          <h2 class="title">페이지를 찾을 수 없습니다.</h2>
          <a href="/" data-link class="list_btn">홈으로 돌아가기</a>
        </div>
      </section>
    `;
  }
}
