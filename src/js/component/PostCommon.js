export const renderTabMenu = activeTab => `
  <ul class="tab_list">
    <li class="${activeTab === 'all' ? 'on' : ''}"><a href="/" data_link>전체</a></li>
    <li class="${activeTab === 'tech' ? 'on' : ''}"><a href="/tech" data_link>개발</a></li>
    <li class="${activeTab === 'design' ? 'on' : ''}"><a href="/design" data_link>디자인</a></li>
  </ul>`;

export const renderPostList = data => `
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
