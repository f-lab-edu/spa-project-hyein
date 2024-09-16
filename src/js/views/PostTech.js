import { getData } from '@api/getData';
import AbstractView from '@abstract';
import { renderTabMenu, renderPostList } from '@component/PostCommon';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('개발');
  }

  async getHtml() {
    const data = await getData();
    const techData = data.tech;

    return `
      <section>
        <div class="inner">
          <img src="src/assets/images/toss_tech_top_img.webp" alt="top_img" class="section_top">
          ${renderTabMenu('tech')}
          ${renderPostList(techData)}
        </div>
      </section>
    `;
  }
}
