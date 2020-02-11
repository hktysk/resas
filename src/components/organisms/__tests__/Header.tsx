import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Header from '../Header';

describe('ヘッダーのテスト', () => {
  let dom: ShallowWrapper;
  beforeEach(() => {
    dom = shallow(<Header />);
  });

  it('ヘッダーのグラフアイコンが表示されているか', () => {
    expect(dom.find('img')).toHaveLength(1);
  });

  it('タイトルがきちんと表示されているか', () => {
    expect(
      dom.find('[data-test="title"]').text(),
    ).toEqual('都道府県別の総人口推移グラフ');
  });
});
