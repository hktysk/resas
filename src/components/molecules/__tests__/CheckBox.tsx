import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CheckBox from '../CheckBox';

describe('チェックボックス単体のテスト', () => {
  const testString = 'test';
  let testFlag = false;
  const toggleFlag = () => {
    testFlag = true;
  };

  let dom: ShallowWrapper;
  beforeEach(() => {
    dom = shallow(
      <CheckBox
        text={testString}
        onChange={toggleFlag}
      />,
    );
  });

  it('propsのテキストは表示されているか', () => {
    expect(
      dom.find('[data-test="btn"]').text(),
    ).toEqual(testString);
  });

  it('選択した時のイベントは発火するか', () => {
    dom.find('[data-test="btn"]').simulate('click');
    expect(testFlag).toEqual(true);
  });
});
