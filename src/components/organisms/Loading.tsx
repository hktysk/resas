import React from 'react';
import './Loading.sass';

type Props = {
  text: string
};

const Loading: React.FC<Props> = ({ text }) => (
  <div
    className="Loading"
    data-test="loading"
  >
    { text }
  </div>
);

export default Loading;
