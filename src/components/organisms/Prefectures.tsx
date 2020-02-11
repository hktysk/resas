import React from 'react';
import CheckBox from '../molecules/CheckBox';
import { Prefecture } from '../../types';
import './Prefectures.sass';

type Props = {
  prefectures: Prefecture[]
};

const Prefectures: React.FC<Props> = ({ prefectures }) => (
  <div className="Prefectures">
    {
      prefectures.map((pref: Prefecture) => (
        <div
          className="Prefectures__checkbox"
          key={pref.prefName}
        >
          <CheckBox
            text={pref.prefName}
            onChange={() => {}}
            checked={false}
          />
        </div>
      ))
    }
  </div>
);

export default Prefectures;
