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
});
