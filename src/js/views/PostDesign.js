import { getData } from '@api/getData';
import AbstractView from '@abstract';
import { renderTabMenu, renderPostList } from '@component/PostCommon';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('디자인');
  }

  async getHtml() {
    const data = await getData();
    const designData = data.design;

    return `
      <section>
        <div class="inner">
          <img src="src/assets/images/toss_tech_top_img.webp" alt="top_img" class="section_top">
          ${renderTabMenu('design')}
          ${renderPostList(designData)}
        </div>
      </section>
    `;
  }
}
