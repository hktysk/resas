import React from 'react';
import GraphIcon from '../atoms/graph.png';
import './Header.sass';
import './Header.media.sass';

const Header: React.FC = () => (
  <header className="Header">
    <img src={GraphIcon} alt="logo-icon" />
    <h1
      className="Header__title"
      data-test="title"
    >
      都道府県別の総人口推移グラフ
    </h1>
  </header>
);

export default Header;
