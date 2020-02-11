import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../modules';
import { Prefecture } from '../../../types';
import { prefecturesAction } from '../../../modules/prefectures';
import Prefectures, { Props } from '../Prefectures';

type ContainerProps = Omit<Props, 'selectedPrefectures' | 'onChange'>;

const PrefecturesContainer: React.FC<ContainerProps> = (props) => {
  const store: {
    prefectures: Prefecture[]
    dispatch: {
      prefectures: typeof prefecturesAction
    }
  } = {
    prefectures: useSelector<RootState, Prefecture[]>((state) => state.prefectures),
    dispatch: {
      prefectures: bindActionCreators(prefecturesAction, useDispatch()),
    },
  };

  // 都道府県の選択/解除を行った場合, redux に追加/削除を行う
  const togglePrefecture = (prefecture: Prefecture) => {
    if (store.prefectures.find((v) => v.prefName === prefecture.prefName)) {
      store.dispatch.prefectures.remove(prefecture);
    } else {
      store.dispatch.prefectures.add(prefecture);
    }
  };

  return (
    <Prefectures
      selectedPrefectures={store.prefectures.map((v) => v.prefName)}
      onChange={togglePrefecture}
      {...props}
    />
  );
};

export default PrefecturesContainer;
