import { getData } from '@api/getData';
import AbstractView from '@abstract';

const TAB_LIST_HTML = `
  <ul class="tab_list">
    <li><a href="/" data_link>전체</a></li>
    <li><a href="/tech" data_link>개발</a></li>
    <li class="on"><a href="/design" data_link>디자인</a></li>
  </ul>`;

const renderList = data => `
  <ul class="news_list">
    ${data
      .map(
        item => `
      <li class="item">
        <a href="/article/${item.id}" data_link>
          <div class="news_cont">
            <h3 class="title">${item.title}</h3>
            <p class="sub_title">${item.subTitle}</p>
            <span class="date">${item.date}</span>
            <span class="writer">${item.writer}</span>
          </div>
          <div class="img_box">
            <img src="${item.image}" alt="news_img">
          </div>
        </a>
      </li>`,
      )
      .join('')}
  </ul>`;

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
          ${TAB_LIST_HTML}
          ${renderList(designData)}
        </div>
      </section>
    `;
  }
}
