import React from 'react';
import Template from '../components/templates/App';
import { Prefecture } from '../types';

const App: React.FC = () => {
  const prefectures: Prefecture[] = [
    {
      prefName: '北海道',
      prefCode: 0,
    },
    {
      prefName: '青森県',
      prefCode: 1,
    },
  ];

  return (
    <Template prefectures={prefectures} />
  );
};

export default App;
