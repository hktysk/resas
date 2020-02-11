import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Loading from '../Loading';

describe('ローディングのテスト', () => {
  const text = 'テスト中...';

  let dom: ShallowWrapper;
  beforeEach(() => {
    dom = shallow(<Loading text={text} />);
  });

  it('指定した文字列を表示しているか', () => {
    expect(dom.find('[data-test="loading"]').text()).toEqual(text);
  });
});
