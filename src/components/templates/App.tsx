import React from 'react';
import Header from '../organisms/Header';
import { Prefecture } from '../../types';
import Prefectures from '../organisms/containers/Prefectures';
import HighCharts from '../organisms/containers/HighCharts';
import Loading from '../organisms/Loading';
import './App.sass';
import './App.media.sass';

type Props = {
  prefectures: Prefecture[]
};

const App: React.FC<Props> = ({ prefectures }) => (
  <div className="App">
    <Header />
    <div className="App__prefectures">
      <h2 className="App__heading">都道府県</h2>
      {
        prefectures.length > 0
          ? <Prefectures prefectures={prefectures} />
          : <Loading text="取得中..." />
      }
    </div>
    <div className="App__highcharts">
      <HighCharts />
    </div>
  </div>
);

export default App;
