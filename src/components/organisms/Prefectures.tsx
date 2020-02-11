import React from 'react';
import CheckBox from '../molecules/CheckBox';
import { Prefecture } from '../../types';
import './Prefectures.sass';
import './Prefectures.media.sass';

export type Props = {
  prefectures: Prefecture[],
  selectedPrefectures: string[],
  onChange: (prefecture: Prefecture) => void
};

const Prefectures: React.FC<Props> = ({ prefectures, onChange, selectedPrefectures }) => (
  <div className="Prefectures">
    {
      prefectures.map((pref: Prefecture) => (
        <div
          className="Prefectures__checkbox"
          key={pref.prefName}
        >
          <CheckBox
            text={pref.prefName}
            onChange={() => onChange(pref)}
            checked={selectedPrefectures.includes(pref.prefName)}
          />
        </div>
      ))
    }
  </div>
);

export default Prefectures;
