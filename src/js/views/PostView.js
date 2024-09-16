import { getData } from '@api/getData';
import AbstractView from '@abstract';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('상세');
  }

  async getHtml() {
    const data = await getData();
    const combinedData = [...data.tech, ...data.design];
    const productId = this.params.id;
    const product = combinedData.find(item => item.id === productId);

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
