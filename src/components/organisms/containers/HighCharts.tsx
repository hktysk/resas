import React, { useState, useEffect } from 'react';
import HighCharts, { Series } from '../HighCharts';

const HighChartsContainer: React.FC = () => {
  // highcharts は X軸の categories とグラフのデータとして series が必要
  const [categories, setCategories] = useState<number[]>([]);
  const [series, setSeries] = useState<Series[]>([]);


  useEffect(() => {
    fetch(
      `${process.env.API}/population/${1}`,
    ).then((r) => r.json()).then((totalPopulations: any) => {
      const newSeries: Series = ({
        name: '北海道',
        data: totalPopulations.map((d: any) => d.value),
        color: 'green',
      });

      setCategories(totalPopulations.map((d: any) => d.year));
      setSeries([newSeries]);
    }).catch(() => alert('人口データの取得に失敗しました。通信環境をご確認ください。'));
  }, []);

  return (
    <HighCharts
      series={series}
      categories={categories}
    />
  );
};

export default HighChartsContainer;
