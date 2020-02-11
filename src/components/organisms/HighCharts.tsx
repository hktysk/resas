import React from 'react';
import HighCharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';

export type Series = {
  name: string
  data: number[]
  color: string
};

export type Props = {
  categories: number[]
  series: Series[]
};

const initOptions: any & {
  xAxis: {
    categories: number[]
  },
  series: Series[]
} = {
  title: {
    text: '',
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0,
  },
  xAxis: {
    title: {
      text: '年',
    },
    categories: [],
  },
  yAxis: {
    title: {
      text: '人口数',
    },
    allowDecimals: false,
  },
  tooltip: {
    valueSuffix: '人',
  },
  series: [],
};

const Charts: React.FC<Props> = ({ categories, series }) => {
  if (series.length === 0) {
    return (
      <span>都道府県を選択してください。</span>
    );
  }

  const options = { ...initOptions };
  options.xAxis.categories = categories;
  options.series = series;

  return (
    <HighChartsReact
      highcharts={HighCharts}
      options={options}
    />
  );
};

export default Charts;
