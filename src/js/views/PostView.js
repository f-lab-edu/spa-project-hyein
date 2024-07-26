import AbstractView from './AbstractView.js';
import { getData } from './getData.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('상세');
  }

  async getHtml() {
    const data = await getData();
    const combinedData = [...data.tech, ...data.design];

    const product_id = Number(this.params.i);

    const product = combinedData.find(item => item.id === product_id);

    return `
      <section class="post_desc">
        <div class="inner">
          <img src="/${product.image}" alt="${product.title}" />
          <h1>${product.title}</h1>
          <p>${product.subTitle}</p>
          <a href="/" data_link class="list_btn">목록으로</a>
        </div>
      </section>
    `;
  }
}
