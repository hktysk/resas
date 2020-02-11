import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import lodash from 'lodash';
import { RootState } from '../../../modules';
import { Prefecture } from '../../../types';
import colors from '../../atoms/colors';
import HighCharts, { Series } from '../HighCharts';

const HighChartsContainer: React.FC = () => {
  const store: {
    prefectures: Prefecture[]
  } = {
    prefectures: useSelector<RootState, Prefecture[]>((state) => state.prefectures),
  };

  // highcharts は X軸の categories とグラフのデータとして series が必要
  const [categories, setCategories] = useState<number[]>([]);
  const [series, setSeries] = useState<Series[]>([]);

  const removeSeries = (): void => {
    // 除外する場合は redux に保存してある都道府県と比較
    const prefectures: string[] = store.prefectures.map((v) => v.prefName);
    /*
    * 詳細は確認していないが, shallow copy で渡すと
    * オブジェクトの値(Y軸のデータのみ)が重複し始める.
    * highcharts-react-official の内部で何かしら書き換えられているかもしれない.
    * deep copy で渡すと正常に動作する.
    */
    const removedSeries: Series[] = series.filter((v: Series) => prefectures.includes(v.name));
    setSeries(lodash.cloneDeep(removedSeries));
  };

  /*
  * useEffect の中で fetch を使い非同期で更新するため,
  * series の値を常に ref に記録する
  */
  const seriesRef = useRef<Series[]>(series);
  useEffect(() => {
    seriesRef.current = series;
  }, [series]);

  useEffect(() => {
    // 都道府県の選択を解除した場合
    if (store.prefectures.length < series.length) {
      removeSeries();
      return;
    }

    /*
    * 選択後, redux に新規追加された都道府県を取得.
    * 最初は localStorage に保存している都道府県をすべて取得
    */
    const targetPrefectures: Prefecture[] = series.length > 0
      ? store.prefectures.slice(-1)
      : store.prefectures;

    targetPrefectures.forEach((v) => {
      fetch(
        `${process.env.API}/population/${v.prefCode}`,
      ).then((r) => r.json()).then((totalPopulations: any) => {
        const newSeries: Series = ({
          name: v.prefName,
          data: totalPopulations.map((d: any) => d.value),
          /*
          * highcharts-react-official でグラフの追加/削除を行っていると,
          * 同じ色の同じマークのグラフが追加されるようになる.
          * 一回ずつ初期化した場合は重複しないが UX が悪い.
          * そのため色を指定する.
          */
          color: colors[seriesRef.current.length],
        });

        setCategories(totalPopulations.map((d: any) => d.year));
        setSeries([...seriesRef.current, newSeries]);
      }).catch(() => alert('人口データの取得に失敗しました。通信環境をご確認ください。'));
    });
  }, [store.prefectures]);

  return (
    <HighCharts
      series={series}
      categories={categories}
    />
  );
};

export default HighChartsContainer;
