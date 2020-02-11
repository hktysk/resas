import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Prefecture } from '../../../types';
import Prefectures from '../Prefectures';

describe('動的にチェックボックスを生成', () => {
  const prefectures: Prefecture[] = [
    { prefName: '北海道', prefCode: 0 },
    { prefName: '青森県', prefCode: 1 },
  ];

  let dom: ShallowWrapper;
  beforeEach(() => {
    dom = shallow(
      <Prefectures
        prefectures={prefectures}
        selectedPrefectures={prefectures.map((v) => v.prefName)}
        onChange={(_: Prefecture) => Boolean(_)}
      />,
    );
  });

  it('チェックボックスを生成できているか', () => {
    expect(dom.find('.Prefectures__checkbox')).toHaveLength(2);
  });
});
