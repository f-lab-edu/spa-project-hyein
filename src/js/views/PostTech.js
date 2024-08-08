import AbstractView from './AbstractView.js';
import { getData } from './getData.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('개발');
  }

  async getHtml() {
    const data = await getData();
    const techData = data.tech;

    let listProducts = '<ul class="news_list">';
    for (let i in techData) {
      listProducts += `
      <li class="item">
        <a href="/article/${techData[i]['id']}" data_link>
          <div class="news_cont">
            <h3 class="title">${techData[i]['title']}</h3>
            <p class="sub_title">${techData[i]['subTitle']}</p>
            <span class="date">${techData[i]['date']}</span>
            <span class="writer">${techData[i]['writer']}</span>
          </div>
          <div class="img_box"><img src="${techData[i]['image']}" alt="news_img"></div>
        </a>
      </li>`;
    }
    listProducts += '</ul>';

    return `
      <section>
        <div class="inner">
          <img src="src/assets/images/toss_tech_top_img.webp" alt="top_img" class="section_top">
          <ul class="tab_list">
            <li><a href="/" data_link>전체</a></li>
            <li class="on"><a href="/tech" data_link>개발</a></li>
            <li><a href="/design" data_link>디자인</a></li>
          </ul>
          ${listProducts}
        </div>
      </section>
    `;
  }
}
