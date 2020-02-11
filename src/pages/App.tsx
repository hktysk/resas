import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import Template from '../components/templates/App';
import { Prefecture } from '../types';

const App: React.FC = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  useEffect(() => {
    (async () => {
      let resasPrefectures: Prefecture[] = [];

      try {
        resasPrefectures = await fetch(`${process.env.API}/prefectures`)
          .then((r: any) => r.json())
          .then((data: any): Prefecture[] => data.map((v: any): Prefecture => ({
            prefName: v.prefName,
            prefCode: v.PrefCode,
          })));
      } catch (_) {
        alert('都道府県を取得できませんでした。通信環境をご確認ください。');
        return;
      }

      setPrefectures(resasPrefectures);
    })();
  }, []);

  return (
    <Template prefectures={prefectures} />
  );
};

export default App;
